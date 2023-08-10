import React from 'react'

export default function TextInfo(props) {
  const styleText={
    color:props.mode=='light'?'black':'white'
  }
  return (
    <>
        <div className='container'>
            <h4 style={styleText}>Text summery</h4>
            <p style={styleText}>{props.text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {props.text.length} characters</p>
            <h4 style={styleText}>Time To read the text</h4>
            <p style={styleText}>{props.text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} minutes </p>
            <h4 style={styleText}>Text Preview</h4>
            <p style={styleText}>{props.text}</p>
        </div>
    </>
  )
}
