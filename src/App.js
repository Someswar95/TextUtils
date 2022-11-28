import React from 'react'
import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar';


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

  // state = {
  //   progress:0
  // }

  const [progress, setProgress] = useState(0)
  
  // setProgress(progress){
  //   this.setState({progress: progress})
  // }

  return (
    <>
    <Router>
      <Navbar title="TextUtils"/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" setProgress={setProgress} element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" />} />
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
