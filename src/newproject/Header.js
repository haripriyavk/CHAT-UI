import React from "react";

export const MyHeader = () => {
  const headerStyle = {
    div: {
      padding: "10px",
      backgroundColor: "linear-gradient(257deg, rgba(2,126,102,1) 0%, rgba(15,221,169,1) 36%, rgba(0,250,255,1) 100%)",
      color: "black",
      margin: "-10px",
      fontFamily: "sans-serif",
      textAlign: "center",
    },
  };
  return (
    <div style={headerStyle.div}>
      <h3>SIMPLE CHAT UI USING REACT</h3>
    </div>
  );
};