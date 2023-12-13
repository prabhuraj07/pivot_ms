import pandas as pd
import redis
import io

EXCEL_FILE = "./api/sample_file.xlsx"
# r = redis.Redis(host='redis://127.0.0.1:6379/1', port=6379, db=0)

# Connect to Redis using the URL
# redis_url = "redis://127.0.0.1:6379/0"
r = redis.StrictRedis(host='redis', port=6379, db=0)

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
