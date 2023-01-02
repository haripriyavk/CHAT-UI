import React from "react";

export const MyInput = (props) => {
  const inputStyle = {
    div: {
      fontFamily: "sans-serif",
      background: "linear-gradient(257deg, rgba(2,126,102,1) 0%, rgba(15,221,169,1) 36%, rgba(0,250,255,1) 100%)",
      color: "white",
      position: "fixed",
      bottom: "0",
      padding: "10px",
      width: "100%",
      marginLeft: "-8px",
      
    },
    input: {
      padding: "10px",
      borderRadius:"10px",
      margin: "5px",
      width: "65%",
    },
    button: {
      padding: "10px",
      borderRadius:"10px",
      backgroundColor: "#03fccf",
      color: "black",
      width: "85px",
      fontWeight:"bold"
    },
  };
  return (
    <div style={inputStyle.div}>
      <input
        type="text"
        placeholder="Write a message"
        id="message"
        style={inputStyle.input}
      />
      <button id="btn" onClick={props.input} style={inputStyle.button}>
        Send
      </button>
    </div>
  );
};