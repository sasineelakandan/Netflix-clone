import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from './pages/Homescreen';
import './App.css'
import LoginScreen from './compenets/LoginScreen';


const App = () => {

   const user=true
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App