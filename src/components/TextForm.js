import React, {useState} from 'react'

export default function TextForm(props) {
  // Convert Uppercase
  const handleUpClick = ()=> {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  }
  // Convert Lowercase
  const handleLoClick = ()=> {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  }
  // Clear TextArea
  const handleClearClick = ()=> {
    let newText = "";
    setText(newText);
    props.showAlert("clear text!","success");
  }
  const handleTextToSpeech = ()=> {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg); 
    props.showAlert("listen text!","success");
  }
  const handleCopy = ()=> {
    let text = document.getElementById("formTextUtils");
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("coppied to clipboard!","success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("format text!","success");
  }

  const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="formTextUtils" rows="7"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Lowercase</button>
      <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear</button>
      <button className='btn btn-primary mx-1' onClick={handleTextToSpeech}>Text Speech</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Text Copy</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Format Text</button>
    </div>
    <div className='container my-3'> 
      <h2>Your Text Summary</h2>
      <p>Character : {text.length} | Words : {text.split(" ").length} | Sentence : {text.split(".").length}</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
