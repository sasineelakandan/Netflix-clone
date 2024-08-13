import React, { useState, useEffect, useContext,createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomeScreen from './pages/Homescreen';
import './App.css';
import LoginScreen from './compenets/LoginScreen';

export const UserContext = createContext();



const App = () => {
  const [user, setUser] = useState(null);

 

 
  
  return (
  <UserContext.Provider value={{user,setUser}} >
    <div className="app">
      <Router>
        
        
      
          <Routes>
          <Route path="login" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />} />
           
          </Routes>
        
      </Router>
    </div>
    </UserContext.Provider>
  );
};

export default App;
