import pandas as pd
import redis
import io

EXCEL_FILE = "sample_file.xlsx"
r = redis.Redis(host='localhost', port=6379, db=0)

def get_dataframe():
    """
    Read Excel Data and store it redis and return dataframe
    """
    key = "pivot:excel"
    data = r.get(key)
   
    if not data:
        df = pd.read_excel(EXCEL_FILE)
        df_binary = io.BytesIO()
        df.to_pickle(df_binary)
        r.set(key, df_binary.getvalue())
    else:
        df = pd.read_pickle(io.BytesIO(data))
    return df
