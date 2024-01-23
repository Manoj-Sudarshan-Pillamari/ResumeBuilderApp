import { useState } from 'react';
import './App.css';
import Resume from './components/Resume';
import { Switch } from 'antd';

function App() {
  const [mode, setMode] = useState(false);
  const handleSwitch = () => {
    setMode(!mode);
  }

  const lightMode = {
    color: "black",
    backgroundColor: "white"
  }

  const darkMode = {
    color: "white",
    backgroundColor: "black"
  }

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.print()
  }

  return (
    <div className="App" style={mode ? darkMode : lightMode}>
      <div className='header'>
        <h1 style={{margin:0,padding:0}}>Resume</h1>
        <div>
        Light &nbsp;
        <Switch style={{margin:0,padding:0}} onChange={handleSwitch}/>&nbsp;
        Dark
        </div>
      </div>
      <Resume themeMode={mode} />
      <center><button type='submit' className='print-resume' onClick={handleClick}>Print</button></center>
    </div>
  );
}

export default App;
