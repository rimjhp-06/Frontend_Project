import React from 'react';
import { useNavigate} from 'react-router-dom';
import "./Dashboard.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import CsvTable from './CsvTable';
import Papa from 'papaparse';



function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [csvData, setCsvData] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  
  const handleLogoutClick = () => {
    localStorage.removeItem('authToken');
   navigate('/login');
  };
  // Import CSV file and convert to JSON, then save to local storage
  const handleImport = (event) => {
   
    const file = event.target.files[0];
  
    const reader = new FileReader();

    reader.onload = (event) => {
      setCsvData(event.target.result);
    };
   if(file)
    reader.readAsText(file);
  };

const handleStoredImport =()=>{
    const storedData = localStorage.getItem('Student');
  if (storedData) {
    const parsedData = Papa.parse(storedData, { header: true }).data;
    setStudentData(parsedData);
  }
  }

  // Export JSON data saved in local storage
  const handleExport = () => {
    const jsonData = JSON.parse(localStorage.getItem('./Student.csv'));
    const filename = 'student_data.json';
    const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div class="body">
      <div class="left">
      <h1>Students</h1>
      <p>List of students in the database</p>
      </div>
      <div class="right">
        <input type="file" accept=".csv" class="import" onChange={handleImport} />
       
        <button class="export" onClick={handleExport}>Export as CSV</button>
        {studentData.map((student, index) => (
        <div key={index}>{JSON.stringify(student)}</div>
      ))}
      </div>
      <div class="data"> {csvData && <CsvTable csvData={csvData} />}</div>
      {userData ? (
        <div>
          <p>Welcome, {userData.name}!</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default Dashboard;
