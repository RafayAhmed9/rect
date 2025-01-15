import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Postdata from './pages/Postdata';
import Getdata from './pages/Getdata';


function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Postdata />}/>
      <Route path="/Getdata" element={<Getdata />}/>
   
    </Routes>
  </BrowserRouter>

  );
}
export default App;