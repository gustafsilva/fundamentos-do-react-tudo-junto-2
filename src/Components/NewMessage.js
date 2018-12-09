import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired
  }

  state = {
    message: ''
  }

  isDisabled = () => {
    return this.state.message === '';
  };

  updateMessage = (newMessage) => {
    this.setState({
      message: newMessage
    });
  }

  createMessage = (event) => {
    event.preventDefault();

    const { message } = this.state;

    if(message !== '') {
      this.props.addMessage(message);

      this.setState({
        message: ''
      })
    }
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <form className="input-group" action="#">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={(event) => this.updateMessage(event.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn submit-button"
              disabled={this.isDisabled()}
              onClick={this.createMessage}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMessage;
