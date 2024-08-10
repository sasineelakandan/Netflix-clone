import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from './pages/Homescreen';
import './App.css'


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<HomeScreen/>}> </Route>
      
      </Routes>
    
      </Router>  
  
     
    </div>
  )
}

export default App