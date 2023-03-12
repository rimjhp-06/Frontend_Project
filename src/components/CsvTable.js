import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';
import "./Table.css";

function CsvTable(props) {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    Papa.parse(props.csvData, {
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, [props.csvData]);

  return (
   
    <Table striped bordered hover >
      <thead>
      {data.length>0 && 
        <tr>
           
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
       </tr>
}
      </thead>

      
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
              
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
            
  );
}

export default CsvTable;
