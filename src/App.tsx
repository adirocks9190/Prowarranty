import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './components/MainApp';
import EmployeePortal from './components/EmployeePortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/employee/*" element={<EmployeePortal />} />
      </Routes>
    </Router>
  );
}

export default App;
