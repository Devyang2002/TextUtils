import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
    const handleupclick = () =>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleonchange = (event) =>{
        setText(event.target.value);
    }
    const handleloclick =() =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }
    const handleclearclick =() =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text is Cleared","success");
    }
    const handlecopyclick = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard","success");
    }
    const handleresclick = () =>{
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
    }
    const [text,setText] = useState('')
  return (
    <>
    <div>
    <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>  
    <textarea className="form-control" value = {text} onChange ={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleresclick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  );
}
