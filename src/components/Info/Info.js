import React from 'react';

import { Button, DialogTitle, Dialog, DialogContent } from '@material-ui/core';

class Info extends React.Component {
  state = { open: false }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Game Rules</DialogTitle>
          <DialogContent>This is a Number Guessing Game with the following rules:
            <ol>
              <li>The machine picks a random number between 1 to 100 and keeps it hidden.</li>
              <li>You need to guess until you can find the hidden secret number.</li>
              <li>You will get feedback on how close or far your guess is in the form of the following keywords ("cold", "warm", "hot", "extremely hot").</li>
            </ol>
            Everything clear?
          </DialogContent>
          <Button onClick={this.handleToggle}>YES</Button>
        </Dialog>
        <Button fullWidth variant="contained" color="primary" onClick={this.handleToggle}>How to Play</Button>
      </React.Fragment>
    );
  }
}

export default Info;
