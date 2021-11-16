import React, {useState, useEffect} from 'react';
import '../TextArea/textarea.css';

function TextArea(props) {
  const [currentText] = useState(props.currentText);
  const [testText] = useState(() => currentText.split(''));
   
    return (
             <div>
                 <br />
                 <h1 className="title">
                     <u> Typing Speed Test</u>
                </h1>
                 <div className="textArea">
                 {
                    testText.map((s,i) => {
                        return <span key={i}>{s}</span>
                    })
                    }
                 </div>
            </div>
  );
}

export default TextArea;