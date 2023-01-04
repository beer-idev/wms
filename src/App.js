import React from "react";
// import { Button } from 'antd';
import HomePage from "./pages/home";
import GridPage from "./pages/grid";
import ProductPage from "./pages/product";

// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
  <div className="App">
  <Routes>
        <Route exact path='/' element={< HomePage />}></Route>
        <Route exact path='/grid' element={< GridPage />}></Route>
        <Route exact path='/product' element={< ProductPage />}></Route>
 </Routes>
 </div>
</Router>
);

export default App;
