import React from 'react';
// import About from './Components/About';
import Navbar from'./Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },4000);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" about="About us" mode ={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;