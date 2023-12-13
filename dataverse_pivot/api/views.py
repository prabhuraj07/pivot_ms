import json
import pandas as pd
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.utils import get_dataframe
import logging

# Create your views here.
pd.set_option('display.float_format', lambda x: '%.2f' % x)

class Pivot(APIView):

    def post(self, request):
        pivot_params = request.data
        try:
            df = get_dataframe()
            pivot_query = {}
            if 'rows' in pivot_params and pivot_params["rows"]:
                pivot_query["index"] = pivot_params.get("rows")
            if 'values' in pivot_params and pivot_params["values"]:
                pivot_query["values"] = pivot_params.get("values")
            if 'columns' in pivot_params and pivot_params["columns"]:
                pivot_query["columns"] = pivot_params.get("columns")
            if 'aggfunc' in pivot_params and pivot_params["aggfunc"]:
                pivot_query["aggfunc"] = pivot_params.get("aggfunc")
            print(pivot_query, "query")
            print(pivot_query)
            # table = pd.pivot_table(
            #     df, **pivot_query,
            #     margins=True,
            #     margins_name="Total"
            # )
            if pivot_query['aggfunc'] == 'count':
                group_by_columns = pivot_query.get('index', []) + pivot_query.get("columns", [])
                print(group_by_columns, "gggg")
                grouped_df = df.groupby(group_by_columns).size().reset_index(name='Total')
                pivot_query['aggfunc'] = 'sum'
                table = grouped_df.pivot_table(**pivot_query, margins=True, margins_name='Total', fill_value=0)
                return Response({"html_content":table.to_html()})
            elif pivot_query['aggfunc'] in ['first', 'last']:
                table = df.pivot_table(**pivot_query, fill_value=0)
                return Response({"html_content":table.to_html()})
            elif pivot_query['aggfunc'] == 'sum_over_sum':
                # Create a pivot table with the sum over the sum
                agg_func_dict = {k:'sum'for k in pivot_query['values']}
                pivot_table = df.pivot_table(values=pivot_query["values"],
                                index=pivot_query['index'],
                                aggfunc=agg_func_dict)

                # Calculate the sum over the sum
                pivot_table['SumOverSum'] = pivot_table[pivot_query['values'][0]] / pivot_table[pivot_query['values'][1]].sum()
                return Response({"html_content":pivot_table.to_html()})

            else: 
                table = df.pivot_table(**pivot_query, fill_value=0, margins=True, margins_name='Total')
                return Response({"html_content":table.to_html()})
                
        except Exception as e:
            print(e)
            logging.error(e)
            return Response({"error":"Invalid Request"}, status=status.HTTP_400_BAD_REQUEST)