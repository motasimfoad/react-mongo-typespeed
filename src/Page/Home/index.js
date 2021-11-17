import React, {useState} from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import Score from '../../Components/Score';
import { useTimer } from 'use-timer';
import {randomText} from '../../Constant';
import logo from '../../Assets/Image/logo.jpeg';

function App() {

  const { time, start, pause } = useTimer();
  const [currentScore, setCurrentScore] = useState(0);
  const [currentText] = useState(randomText());
  const [userText, setUserText] = useState('');
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState('');

  const onChange = (e) => {
    const a = e.currentTarget.value;
     start();
     setUserText(a);
     complete(a);
     setCharCount(checker(a));
     setCurrentScore(() => scoreEngine());
 };

 const checker = (e) => {
     setText(() => currentText.replace(' ', ''));
     return (() => e.replace(' ', '').split('').filter((s,i) => s === text[i]).length)
   };

 const complete = (e) => {
   if (currentText.length === e.length) {
     pause();
    }
 };

 const scoreEngine = () => {
   if (charCount !== 0 && time !== 0) {
     const wpm = (charCount/5) / (time/60);
     return (
        Math.round(wpm)
     )
   }
   return 0;
}

  const next = () => {
    window.location.reload(false);
  }


  return (
   <Container className="main" fluid>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Typespeed
          </Navbar.Brand>
          <Nav.Link eventKey={2} href="#memes">
            Donate
          </Nav.Link>
        </Container>
      </Navbar>
      
       <Row style={{height:'100vh'}}>
           <Col xl={7} >
            < br />
            <TextArea currentText={currentText} userText={userText}/>
            < br />
            <div>
            <textarea cols="40" rows="10" className="userInput" type="text" placeholder="Start typing here ..." onChange={onChange} autoComplete="false" onPaste={()=> {return false}} />
            </div>
            < br />
            <Button variant="dark" size="lg" className="nextBtn" onClick={next}>Next</Button>
           
          </Col>
          <Col xl={5}>
          <Score currentscore={currentScore}/>
          
          </Col>
          <div className="footer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                  (c)Type Speed
              </a>
            </div>
       </Row>
   </Container>
  );
}

export default App;