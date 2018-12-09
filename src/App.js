import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './Components/ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: []
  }

  addMessage = (message) => {
    const { messages } = this.state;

    messages.push(message);

    this.setState({
      messages
    });
  }

  render() {
    const { messages } = this.state;

    const chats = users.map((user, index) => (
      <ChatWindow key={index} user={user} messages={messages} addMessage={this.addMessage} />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {chats}
        </div>
      </div>
    );
  }
}

export default App;
