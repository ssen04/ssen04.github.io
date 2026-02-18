import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPosting from './pages/JobPosting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobPosting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;