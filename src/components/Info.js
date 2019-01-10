import React, {Component} from 'react';
import './Info.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Info extends Component {
  state = {
    show: false
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }


  render() {
    return (
      <div className="text-center info">
        <button className="btn btn-info btn-block info__btn" type="button" onClick={this.handleShow}>
          How To Play
        </button>
        <Modal show={this.state.show} onHide={this.handleClose} className="info__modal">
          <Modal.Header closeButton>
            <Modal.Title>
              Game Rules
            </Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            This is a Number Guessing Game with the following rules:
            <br />
            <br />
            1. The machine picks a random number between 1 to 100 and keeps it hidden.
            <br />
            <br />
            2. You need to guess until you can find the hidden secret number.
            <br />
            <br />
            3. You will get feedback on how close or far your guess is in the form of the following keywords ("cold", "warm", "hot", "extremely hot").
            <br />
            <br />
            Everything clear?
          </Modal.Body>
  
          <Modal.Footer>
            <Button onClick={this.handleClose}>
              YES
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Info;