import React from "react";

function Heading() {
  const date = new Date(); //.setTime(16);
  const moment = date.getHours();
  let greeting;
  const customStyle = {
    color: "",
  };

  if (moment < 12) {
    greeting = "Good morning";
    customStyle.color = "red";
  } else if (moment < 18) {
    greeting = "Good afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good evening";
    customStyle.color = "blue";
  }
  return <h1 className="heading" style={customStyle}>{greeting}</h1>;
}

export default Heading;