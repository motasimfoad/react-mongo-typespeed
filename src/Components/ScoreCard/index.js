import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../ScoreCard/scorecard.css';

function ScoreCard(props) {
  
  const [userName, setUserName] = useState('');
  const score = parseInt(props.currentscore);
   
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <Form.Group>
            <br />
            <h2 className="title">
                Submit Score : {props.currentscore}WPM?
            </h2>
            <br />
            <br />
        <Form.Control className="input" size="lg" type="text" placeholder="Your name?" onChange={(e) => setUserName(e.target.value)}/>
        <br />
        <br />
        <div style={{textAlign: 'right'}}>
        <Button className="btn1" onClick={props.onHide}>Cancel</Button>
        <Button className="btn2">Submit</Button>
        </div>
        </Form.Group>
        </Modal.Body>
      </Modal>
    );
  }

  export default ScoreCard;