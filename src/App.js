import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './store';
import Table from './Table';
import Form from './Form';
import { downloadExcel } from './utils';

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
];

const dummyData = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Doe', age: 32, email: 'jane@example.com' },
  // Add more dummy data here
];

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
    <div>
      <Form onSubmit={handleFormSubmit} />
      <Table columns={columns} data={data} />
      <button onClick={() => downloadExcel(data)}>Download Excel</button>
    </div>
  );
};

export default App;