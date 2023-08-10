import React, { useState } from 'react'
import TextInfo from './TextInfo';


export default function Textarea(props) {
    const [text,setText]=useState('');
    const styleText={
        color:props.mode=='light'?'black':'white'
    }
    const style={
        color:props.mode=='light'?'black':'white',
        background:props.mode=='light'?'white':'#202020'
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const capital=()=>{
        setText(text.toUpperCase());
    }
    const lower=()=>{
        setText(text.toLowerCase());
    }
    const clear=()=>{
        setText('');
    }
  return (
    <>  
        <div className='container'> 
            <h4 className='mt-5' style={styleText}>Enter Text in textbox</h4>
            <textarea className='form-control mb-3' style={style} value={text} onChange={handleOnChange} name="textarea" id="textara" cols="30" rows="10"></textarea>
            <button disabled={text.length===0} className={`btn btn-${props.mode=='light'?'primary':'secondary'} m-2`}  onClick={capital}>Capitalize</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode=='light'?'primary':'secondary'} m-2`} onClick={lower}>Lower</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode=='light'?'primary':'secondary'} m-2`} onClick={clear}>Clear Text</button>
        </div>
        <TextInfo text={text} mode={props.mode}/>
    </>
  )
}
