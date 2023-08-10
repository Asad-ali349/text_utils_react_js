
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode,setMode]=useState('light');
  const changeMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.background='white';
      
    }else if(mode==='light'){
      setMode('dark');
      document.body.style.background='black';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} handleMode={changeMode}/>
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <Textarea mode={mode}/>
          </Route>
        </Switch>
      </Router>
     
      </>
  );
}

export default App;
