import React from "react";

import "./styles.css";
import Message from "../Message/Message";

class ChatStream extends React.Component {
  render() {
    return (
      <div className="chat-stream">
        <div className="chat-stream-content">
          {this.props.messages.map(message => (
            <Message
              message={message.body.slice(0, 45)}
              user={message.name.slice(0, 7)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ChatStream;
