

import './App.css';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'

import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = () =>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor='#9ee0ee';
      showAlert("Light Mode Enabled","success :");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor='#0f2943';
      showAlert("Dark Mode Enabled","success :");
    }
  }
  return (
    <>
       <Router>
      <Navbar title="Textutils1.0" aboutauthor="Aboutus" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        
      <Routes>
      <Route exact path="/" 
      element={<Textform showAlert={showAlert} heading="Enter the text to be Analysed Below:" mode={mode}toggleMode={toggleMode}/>}>
      </Route>
      <Route path="/about" element={<Aboutus />}></Route>
      
      </Routes>
       
      </div>
      </Router>
      
    </>
  );
}

export default App;

