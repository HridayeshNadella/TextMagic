import {React,useState} from 'react'

export default function Textform(props) {
    const [text,settext] = useState('');
    const onchangetext =(event)=>{
        settext(event.target.value);
    }
    const oncaptalize =()=>{
        let newtext= text.toUpperCase();
        settext(newtext);
        props.showAlert("Text has been Captalised","success :");
    }
    const onlower =()=>{
        let newtext= text.toLowerCase();
        settext(newtext);
        props.showAlert("Text has been Coverted to LowerCase","success :");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML === "Speak"){
              window.speechSynthesis.cancel()
          }
      }
      props.showAlert("Text has been spoken","success :");
    }
    const copyText = () =>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied to Clipboard","success :");
    }
    const clearText = () =>{
        settext("");
    }
    const removeExtraSpaces =()=>{
        settext(text.replace(/\s+/g, ' ').trim());
        props.showAlert("Extra Spaces have been Removed","success :");
    }
    const CaptalizeFirstLetter = ()=>{
        const sentences = text.split(/([.!?]\s*)/);
        for (let i = 0; i < sentences.length; i += 2) {
          if (sentences[i]) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
          }
        }
        settext(sentences.join(''))
        props.showAlert("First letter of the Sentence has been Captalised","success :");
    }
    const textspit = (sentence) =>{
        const words = sentence.trim().split(/\s+/);
        if (sentence.trim() === '') {
            return 0;
        }
        return words.length;
    }
  return (
       <>
       <div className='container'> 
    <h1>{props.heading}</h1>
     <div className="mb-3">
      {/* <label for="mybox" class="form-label">Text Please</label> */}
      <textarea className="form-control" id="myBox" rows="15" value={text}onChange={onchangetext}></textarea>
      
      </div>
      <button className="btn btn-success mx-2" onClick={oncaptalize}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={onlower}>Convert to LowerCase</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
      <button className="btn btn-success mx-2" onClick={copyText}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
      <button className="btn btn-warning mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-success mx-2" onClick={CaptalizeFirstLetter}>Captalize First letter of Sentence</button>
        </div>
        <div className="container my-3">
            <h1>Text Details: </h1>
            <h5>{textspit(text)} words and {text.length} characters</h5>
            <h5>{textspit(text)*0.08} sec to read</h5>
        </div>
       </>

  )
}
