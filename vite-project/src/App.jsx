import './App.css';
import { useState } from 'react';
import EmpTable from './Pages/Table/Table';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const initialData = [
    { Empid: 1, Empname: 'Fasilath', email: 'fasilath21@gmail.com'},
    { Empid: 2, Empname: 'Sona S', email: 'sonas43@gmail.com' },
    { Empid: 3, Empname: 'Reshma', email: 'reshma56@gmail.com' },
  ];
  const additionalData = [
    { Empid: 4, Empname: 'Haritha', email: 'haritha48@gmail.com' },
    { Empid: 5, Empname: 'Aiswarya', email: 'aishu84@gmail.com' },
    { Empid: 6, Empname: 'Sona P', email: 'sonap92@gmail.com' },
  ];

  const [data, setData] = useState(initialData);
  const [index, setIndex] = useState(0);

  const addData = () => {
    if (index < additionalData.length) {
      setData([...data, additionalData[index]]);
      setIndex(index + 1);
    } else {
      alert('No more data to add');
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<EmpTable data={data} addData={addData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
