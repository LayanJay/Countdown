import React from "react";
import "./time.css";

function TimeDiv(props) {
  return (
    <div className="timeDiv">
      <div className="time">{props.time}</div>
      <div className="component">{props.component}</div>
    </div>
  );
}

export default TimeDiv;
