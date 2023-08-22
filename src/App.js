import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';



let name = 'Rayan'

function App() {
  const[mode,setMode] = useState('light')
  const[alertObj,setAlert] = useState(null)

  const handleAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type 
    })

    setTimeout(() => setAlert(null), 2000)
  }


  const handleModeChange = () => {



    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'

      handleAlert("Dark Mode On", "success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'

      handleAlert("Light Mode On", "success")
    }

  }

  return (
    <>
      <Navbar title = "TextUtils" about = "About" toggleMode={handleModeChange} mode= {mode}/>
      <Alert alert={alertObj}></Alert>
      <Routes>
        <Route path='/React-Text-Utils-App/' element={

          <div className='container'>
              <TextForm heading="Enter the text to analyze" alert = {handleAlert} />
          </div>}>

        </Route>

        <Route path='/React-Text-Utils-App/about' element={<About/>}></Route>
      </Routes>

    </>
  );
}

export default App;
