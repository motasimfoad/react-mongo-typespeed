import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import Score from '../../Components/Score';
// import ScoreCard from '../../Components/ScoreCard';

function App() {


  return (
   <Container className="main" fluid>

       <Row style={{height:'100vh'}}>
           <Col xl={7} style={{marginTop:'10%'}}>
            < br />
            <TextArea/>
            < br />
            <div>
              <textarea cols="40" rows="10" className="userInput" type="text" placeholder="Start typing here ..."  />
            </div>
            < br />
            <Button variant="dark" size="lg" className="nextBtn">Next</Button>
            <div style={{marginTop:'10%'}}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                  (c)Type Speed
              </a>
            </div>
          </Col>
          <Col xl={5}>
           <Score/>
           {/* <ScoreCard
            show={modalShow}
            onHide={() => setModalShow(false)}
            currentscore={currentScore}
            /> */}
          </Col>
       </Row>
   </Container>
  );
}

export default App;