import React, {useState} from 'react';
import {props, PropTypes} from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Convert to Uppercase clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to uppercase.", "success");
        }
    const handleOnChange = (event) => {
    console.log("When Uppercase clicked.");
    setText(event.target.value);

    }
    const handleLowClick = (event) => {
        console.log("When text clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted to lowercase.", "success");
    }

    const handleWordCount = (event) => {
        console.log("When text clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        
        props.showAlert("text converted to lowercase.", "success");
    }
    
    const handleReplaceClick = (event) => {
        console.log("When text clicked." + text);
        let newText = text.replace();
        setText(newText);
    }
    const handleReverseClick = (event) => {
        console.log("When text clicked." + text);
        let newText = text.reverseString(text);
        setText(newText);
    }            
    const [text, setText] = useState('Party with stars');


    return (
    <>
   
    <div className='container' style= {{color: props.mode === 'dark'? 'white' : 'black'}}>
    <div className="mb-3">
  <label htmlFor="boxcar" className="form-label">Dream Whisperer</label>
  <div className="container m-md-3">
  <textarea className="form-control" id="boxcar" style={{backgroundColor: props.mode? 'dark' : 'grey', color: props.mode === 'dark'? 'white' : 'black'}} value={ text } onChange = {handleOnChange} rows="7"> Write The Text To Analyse</textarea>
</div>
</div>
</div>

<div>
<button className="btn btn-primary m-md-4" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary m-md-4" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary m-md-4" onClick={handleReplaceClick}>Replace Text</button>
<button className="btn btn-primary m-md-4" onClick={handleReverseClick}>Reverse Text</button>

</div>
<div className="container my-3" style={{color: props.mode ==='yellow'? 'green' : 'yellow'}}>
<h1>Your text summery</h1>
<p>{text.split(" ").length> 0} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").filter((element) => {return element.length!=0}).length} minutes read</p>
<h2>Preview</h2>
<p>{text.length> 0? text: "Enter something in the text box to preview here" }</p>
</div>
    </>
    



    );
}

