import React from 'react'
import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils"/>
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" />} />
          <Route path="about" element={<About />} />
        </Routes>
        
          

        
      </div>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze" /> */}
      {/* <About /> */}
    </Router>
    </>
  );
}

export default App;
