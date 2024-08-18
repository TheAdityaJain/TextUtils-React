import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes, // Updated from Switch to Routes
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [theme, setTheme] = useState('primary')
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success")
    }
  }

  const toggleThemes = () => {
    if (theme === 'primary' || theme === 'warning' || theme === 'success') {
      setTheme('danger')
    } else if (theme === 'primary' || theme === 'danger' || theme === 'success') {
      setTheme('warning')
    } else if (theme === 'primary' || theme === 'danger' || theme === 'warning') {
      setTheme('success')
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} theme={theme} toggleThemes={toggleThemes} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
          <Routes> {/* Updated from Switch to Routes */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/TextUtils-React" element={<TextForm heading='Enter the text to be analyzed' showAlert={showAlert} theme={theme} mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
