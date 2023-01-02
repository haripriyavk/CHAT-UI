import React from "react";
export const MyChat = (props) => {
  const chatStyle = {
    div: {
      padding: "10px",
      color: "black",
      fontFamily: "sans-serif",
      textAlign: "center",
      margin: "5px",
      overflow: "auto",
    },
    p: {
      padding: "10px",
      textAlign: "left",
      backgroundColor: "aquamarine",
      color: "black",
      borderRadius: "10px",
      float: "left",
      fontWeight:"bold"
    },
    ul:{
      float:"right",
      listStyle:"none"
    },
    li:{
      padding:"10px",
      borderRadius:"10px",
      backgroundColor: "#03ffe6",
      margin:"10px",
      width:"150px",
      wordWrap:"break-word"
    }
  };

  return (
    <div id="chat" style={chatStyle.div}>
      <p style={chatStyle.p}>Hey! How are you ?<br/><br/>Tell me about yourself.....</p>
      <ul style={chatStyle.ul}>
        {props.messages.map((message) => {
          return <li style={chatStyle.li} >{message} </li>;
        })}
      </ul>
    </div>
  );
};