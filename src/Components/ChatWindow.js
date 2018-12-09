import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListMessages from './ListMessages';
import NewMessage from './NewMessage';

class ChatWindow extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired
  }

  state = {
    message: ''
  }

  addMessage = (text) => {
    const { username } = this.props.user;
    
    const newMessage = {
      text,
      username
    }

    this.props.addMessage(newMessage);
  }

  render() {
    const { user, messages } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <ListMessages messages={messages} username={user.username} />

        <NewMessage addMessage={this.addMessage} />
      </div>
    );
  }
}

export default ChatWindow;
