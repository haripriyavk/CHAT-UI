import React from "react";

import { MyHeader } from "./newproject/Header";
import { MyChat } from "./newproject/Chat";
import { MyInput } from "./newproject/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  handleInput = () => {
    let val = document.getElementById("message").value;
    let updatedMessages = this.state.messages.concat(val);
    this.setState({
      messages: updatedMessages,
    });
    document.getElementById("message").value = "";
  };

  render() {
    const background={
      div:{
        
       
background: "linear-gradient(257deg, rgba(2,126,102,1) 0%, rgba(15,221,169,1) 36%, rgba(0,250,255,1) 100%)"
      }
    }
    return (
      <div style={background.div}>
        <MyHeader name="Milly Brown" />
        <MyChat messages={this.state.messages} />
        <MyInput input={this.handleInput} />
      </div>
    );
  }
}
export default App;
