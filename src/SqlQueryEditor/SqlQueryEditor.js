import './SqlQueryEditor.css';
import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { CodeController } from '../CodeController/CodeController';
import Grid2 from '@mui/material/Unstable_Grid2';
import { OutputTable } from '../OutputTable/OutputTable';

/** 
 * Display SQL editor component where we can perform all our SQL operations.
 * @return {JSX.Element} SQL editor component
 */
function SqlQueryEditor() {

  //  SQL Editor initializations.
  const [ query, setQuery ] = useState(`/* Write your query here OR use reference queries */`);
  const [ recentQuery, setRecentQuery ] = useState([]);
  const [ tableData, setTableData ] = useState({name:"", data:[]});
  
  return (
    <div className='sql-query-editor'>
        <Grid2 container spacing={3} >
            <Grid2 xs={12} sm={12} md={3} >
              
              <Sidebar 
                recentQuery = {recentQuery} 
                setQuery = {setQuery} />

            </Grid2>
            <Grid2 xs={12} sm={12} md={9} >
              
              <CodeEditor 
                query = {query} 
                setQuery = {setQuery} />
              
              <CodeController 
                query = {query} 
                setQuery = {setQuery} 
                setTableData = {setTableData} 
                setRecentQuery = {setRecentQuery} />
              
              <OutputTable 
                table = {tableData} />
              
              <div 
                table = {tableData} />
                
            </Grid2>
        </Grid2>
    </div>
  )
}

export { SqlQueryEditor};