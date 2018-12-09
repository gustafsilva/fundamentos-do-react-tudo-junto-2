import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const ListMessages = (props) => {
  const { messages, username } = props;

  const messagesList = messages.map((message, index) => (
    <Message key={index} message={message} username={username} />
  ));

  return (
    <ul className="message-list">
      {messagesList}
    </ul>
  );
}

ListMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

export default ListMessages;

