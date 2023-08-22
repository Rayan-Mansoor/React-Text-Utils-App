import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpperCase = ()=>{
    setText(text.toUpperCase())
  }

  const handleLowerCase = ()=> {
    setText(text.toLowerCase())
  }

  const handleCopy = ()=> {
    navigator.clipboard.writeText(text)
    props.alert("Text copied to clipboard", "success")

  }

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' '));
  };

  return (
    <>  
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {text} onChange={handleOnChange} placeholder='Enter the text to capatalize'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpperCase}>
            Convert to Upper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowerCase} >
            Convert to Lower case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces} >
            Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy} >
            Copy Text
        </button>


    </div>
    {text.length > 0 && <div className="container my-5" >
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length != 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>}

    </>

  )
}
