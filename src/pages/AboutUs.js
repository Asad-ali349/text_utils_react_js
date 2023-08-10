import React,{useState} from 'react'
import Navbar from '../components/Navbar'


export default function AboutUs() {
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
    <Navbar title={"TextUtils"} mode={mode} handleMode={changeMode}/>
       
    </>
  )
}
