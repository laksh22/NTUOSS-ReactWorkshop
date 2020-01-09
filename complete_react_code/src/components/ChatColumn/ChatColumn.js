import React from "react";

import "./styles.css";
import TextBox from "../TextBox/TextBox";
import ChatStream from "../ChatStream/ChatStream";

class ChatColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(
        result => {
          console.log(result.slice(0, 10));
          this.setState({
            messages: result.slice(0, 10)
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSendMessage = () => {
    var newMessage = {
      body: this.state.message,
      name: "Username"
    };
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage],
      message: ""
    }));
  };

  render() {
    return (
      <div className="chat-area">
        <ChatStream messages={this.state.messages} />
        <TextBox
          message={this.state.message}
          onChange={this.handleChange}
          onSubmit={this.handleSendMessage}
        />
      </div>
    );
  }
}

export default ChatColumn;
