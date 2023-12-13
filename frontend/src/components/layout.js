import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SideNav } from './PivotSideBar';
import { useState, useCallback } from 'react';
// import { TopNav } from './top-nav';
// import { useMobileNav } from './use-mobile-nav';
import axios from 'axios';
import Pivot from './Pivot';
import { useEffect } from 'react';
import { getSumSupportedColumns, masterData, aggrFuncList } from '../constants';

const SIDE_NAV_WIDTH = 280;

const VerticalLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  //   backgroundColor:"beige",
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const VerticalLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: "#eaf3ff"
});





const getPivotData = async (url, payload) => {
  let res = [];
  res = await axios.post(url, payload, {
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer '+ token
    }
  });

  return new Promise((resolve, reject) => {
    resolve(res.data);
  })
}


const parseHTMLTable = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const table = doc.querySelector('table');
  
  const table_headers = Array.from(table.querySelectorAll('thead tr')).map((header) =>
      Array.from(header.querySelectorAll('th')).map((th) => {
          const rowspan = th.getAttribute('rowspan') || 1;
          const colspan = th.getAttribute('colspan') || 1;
          return {
              text: th.textContent,
              rowspan: parseInt(rowspan),
              colspan: parseInt(colspan),
          };
      })
  );

  const table_rows = Array.from(table.querySelectorAll('tbody tr')).map((row) => {
      const cells = Array.from(row.querySelectorAll('th, td'));
      let currentCol = 0;
      return cells.map((cell) => {
          const rowspan = cell.getAttribute('rowspan') || 1;
          const colspan = cell.getAttribute('colspan') || 1;
          const result = {
              text: cell.textContent,
              rowspan: parseInt(rowspan),
              colspan: parseInt(colspan),
          };
          // Adjust currentCol for colspan
          currentCol += result.colspan;
          return result;
      });
  });

  return { table_headers, table_rows };
};


export const VerticalLayout = (props) => {
  const { children, sections, navColor } = props;
  //const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [aggfuncValue, setaAggFunc] = useState('count');
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedValuesos, setSelectedValueSOS] = useState(false);
  const [masterColumns, setMasterColumns] = useState(masterData);

  const [headers, setHeaders] = useState('');
  const [tablerows, setTableRows] = useState('');
  const [tableData, setTableData] = useState('');

  const value_required_func = ['sum', 'mean', 'nunique', 'median', 'var', 'std', 'min', 'max', 'first', 'last', 'sum_over_sum'];
  const numeric_agg_func = ['sum', 'mean', 'median', 'var', 'std', 'min', 'max', 'first', 'last', 'sum_over_sum'];
  const multi_value_required_func = ['sum_over_sum']


  const handleAggFuncChange = useCallback(async(e) =>{
     console.log(e.target.value)
     console.log("triggering")
     if (numeric_agg_func.indexOf(e.target.value) !== -1){
        let value_list = getSumSupportedColumns(rows, columns);
        setMasterColumns(value_list)
     }
      setaAggFunc(e.target.value);
  }, [rows, columns]);
  
  const handleCallPivotData = useCallback(async (selected_rows, selected_columns, selected_value, aggfunc_value) => {
    console.log("calling")
    setHeaders([]);
    setTableRows([])
    const select_value = selected_value || [];
    const agg_func = aggfunc_value || 'count';
    
    const payload = {
        rows: selected_rows,
        columns: selected_columns,
        values: select_value,
        aggfunc: agg_func
  
      }
    
    let url = "http://127.0.0.1:8000/api/v1/pivot/"
    const resp = await getPivotData(url, payload);
    const { table_headers, table_rows } = parseHTMLTable(resp.html_content)
    setHeaders(table_headers);
    setTableRows(table_rows)
    console.log(table_headers, table_rows);
    setTableData(resp)

  },[]);

  useEffect(()=>{
    if(rows.length > 0 || columns.length > 0){
      console.log(selectedValue, "sv")
      if(value_required_func.indexOf(aggfuncValue) !== -1){

        if(numeric_agg_func.indexOf(aggfuncValue) !== -1){
          let value_list = getSumSupportedColumns(rows, columns);
          setMasterColumns(value_list)
        }
        if(aggfuncValue === 'sum_over_sum'){
          if (selectedValue && selectedValuesos){
              const selectedSOSValues = [selectedValue, selectedValuesos]
              handleCallPivotData(rows.map((item) => (item.title)), columns.map((column) => (column.title)), selectedSOSValues, aggfuncValue);
            }else{
              console.log("Selected Value is mandatory")
            }
        }else{
          if (selectedValue){
            handleCallPivotData(rows.map((item) => (item.title)), columns.map((column) => (column.title)), selectedValue, aggfuncValue);
          }else{
            console.log("Selected Value is mandatory")
          }
        }
        
      }
      else{
        handleCallPivotData(rows.map((item) => (item.title)), columns.map((column) => (column.title)), selectedValue, aggfuncValue);
      }

      
    }
  },[rows, columns, selectedValue, aggfuncValue, selectedValuesos])
 

  const stateData = {
    rows: rows,
    setRows: setRows,
    columns: columns,
    setColumns: setColumns,
    mastersColumn: masterData,
    onDragEvent: handleCallPivotData,
    setTableRows: setTableRows,
    setHeaders: setHeaders

  }

  const pivotData = {
    headers:headers,
    tablerows: tablerows,
    tabledata: tableData,
    aggrFuncList: aggrFuncList,
    onAggFuncChange: handleAggFuncChange,
    masterData: masterColumns,
    selectedValue: selectedValue,
    setSelectedValue: setSelectedValue,
    aggfuncValue: aggfuncValue,
    value_required_func: value_required_func,
    multi_value_required_func:multi_value_required_func,
    selectedValuesos:selectedValuesos,
    setSelectedValueSOS:setSelectedValueSOS
  }

  return (
    <>

      <SideNav
        color={navColor}
        sections={sections}
        masterData={masterData}
        statedata={stateData}
      />
      <VerticalLayoutRoot>
        <VerticalLayoutContainer>
          <Pivot 
            pivotData={pivotData}/>
        </VerticalLayoutContainer>
      </VerticalLayoutRoot>
    </>
  );
};

VerticalLayout.propTypes = {
  children: PropTypes.node,
  navColor: PropTypes.oneOf(['blend-in', 'discreet', 'evident']),
  sections: PropTypes.array
};
