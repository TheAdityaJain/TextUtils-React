import React, {useState} from 'react'

//hooks are used access features of class without creating a class 
//it is used to change the state

export default function TextForm(props) {
    // Declare a new state variable, which we'll call "text"
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked!!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Uppercased","success")
    }

    const handleLowClick = ()=>{
        //console.log("Uppercase was clicked!!!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Lowercased","success")
    }

    const handleCopyClick = ()=>{
        var textSelect = document.getElementById('exampleFormControlTextarea1');
        textSelect.select();
        navigator.clipboard.writeText(textSelect.value)
        props.showAlert("Text Copied!!!","success")
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!!!","success")
    }
    //handling events
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = 'Typing...' Wrong way of changing state
     //Correct way
    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <br/>
            <h4>{props.heading} </h4>
            <div className ="mb-3">
                <textarea className ="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter text here'></textarea>
            </div>
            <button className={`btn btn-${props.theme} mx-1`} onClick={handleUpClick}>Convert in Uppercase</button>
            <button className={`btn btn-${props.theme} mx-1`} onClick={handleLowClick}>Convert in Lowercase</button>
            <button className={`btn btn-${props.theme} mx-1`} onClick={handleClear}>Clear</button>
            <button className={`btn btn-${props.theme} mx-1`} onClick={handleCopyClick}>Copy</button><br/><br/>
            <div className='container mb-3'>
                <h5>Your Text Summary</h5>
                <p>{text.split(" ").length - 1} words, {text.length} characters</p>
                <p>{ 0.08 * text.split(" ").length} minutes to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}
