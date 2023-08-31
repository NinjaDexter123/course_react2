
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import Clients from './components/Clients';
import Reverse from './components/Reverse';
import React, { useState } from 'react';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'; */

function App () {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState(null);
    const showAlert = (message, type) => {
     setAlert({
        msg: message,
        type: type
       },
      /*  setColor({
        msg: message,
        color: setColor(color.green)
        document.title.color=  setColor(color)
              }) */       setTimeout(() => {
        setAlert(null);
       }, 1500));
     
    }


const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Be informed, dark mode activated!!!", "success");
    document.title = "React Course -- The battle is on so be ready in dark mode.";
    setInterval (() => {
      document.title="React Course -- The battle for supremacy."},2000);
      
     
      setInterval (() => {
        document.title="React Course -- The amazing game."}, 1500);
      
      
    }else {



    
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Be informed, light mode activated!!!", "success");
    document.title ="React Course -- The battle is on so be ready in light mode.";
  }
}
  return (
    // <Router>
   <>
   <Navbar title="React Course By Harry"  mode = {mode} toggleMode = { toggleMode } home = " Home React Course" about="about React Course" />
   <Alert alert={alert}/>
   <div className="container my-3">
   
   // 
   <About></About>
 
   
      </div> 
        
 
     <TextForm showAlert = {showAlert} heading="Enter Text To Analyze" />
  
     <Clients showAlert = {showAlert} heading="Enter Text To Analyze" />
   
  
   
   
  
   <Reverse></Reverse>
   
  
   </>

    
   



    
);
}




export default App;
