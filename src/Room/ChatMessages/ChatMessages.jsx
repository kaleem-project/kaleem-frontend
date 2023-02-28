import React from 'react';
import classes from './ChatMessages.css';
import Message from './Message/Message';
import RightArrow from '../../assets/Svg/RightArrow';

function ChatMessage(props) {
  const renderMessages = props.persons.map((message, index) => (
    <Message
      key={index}
      path={message.img}
      message={message.message}
      fname={message.Fname}
      lname={message.Lname}
    />
  ));

  return (
    <main className={classes.main}>
      <div className={classes.upBar}>
        <h3 className={classes.titleChat}>Chat</h3>
        <RightArrow clicked={props.toggleChat} />
      </div>

      <div>
        {renderMessages}

        <div className={classes.downBar}>
          <input
            placeholder="Type a message..."
            className={classes.reply}
            onChange={(e) => props.onChangeSendIcon(e)}
          ></input>

          <svg
            xmlns="http://w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={classes[`${props.sendButton}`]}
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
    </main>
  );
}

export default ChatMessage;
