import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './store';
import Table from './Table';
import Form from './Form';
import { downloadExcel } from './utils';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';


const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone Number', accessor: 'number' },
  { Header: 'City', accessor: 'city' },
  { Header: 'State', accessor: 'state' },
  { Header: 'Country', accessor: 'Country' },
  { Header: 'Address', accessor: 'address' },
];

// const dummyData = [
//   { name: 'John Doe', age: 28, email: 'john@example.com' },
//   { name: 'Jane Doe', age: 32, email: 'jane@example.com' },
// ];

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);

  // useEffect(() => {
  //   console.log('useeffect is running')
  //   dispatch(setData(dummyData));
  // }, [dispatch]);

  const handleFormSubmit = (formData) => {
    dispatch(setData([...data, formData]));
  };

  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Form onSubmit={handleFormSubmit} />} />
        <Route path='/table' element={<Table columns={columns} data={data} />} />
      
      
      </Routes>
      <button className='download-btn' onClick={() => downloadExcel(data)}>Download Excel</button>
    </Router>
  );
};

export default App;