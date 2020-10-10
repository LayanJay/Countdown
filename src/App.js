import React, { useEffect, useRef, useState } from "react";
import TimeDiv from "./time";
import "./App.css";

function App() {
  const [countDownDays, setDays] = useState("00");
  const [countDownHours, setHours] = useState("00");
  const [countDownMinutes, setMinutes] = useState("00");
  const [countDownSeconds, setSeconds] = useState("00");

  let interval = useRef();

  const startCountDown = () => {
    const until = "1 Jan 2021";
    const untilDate = new Date(until).getTime();

    interval = setInterval(() => {
      const date = new Date().getTime();
      const diff = untilDate - date;

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / 1000 / 3600) % 24);
      const days = Math.floor(diff / 1000 / 3600 / 24);

      if (diff < 0) {
        //stop the countdown
        clearInterval(interval.current);
      } else {
        //run the countdown
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startCountDown();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="main">
      <div className="head">New Year Eve</div>
      <div className="app">
        <TimeDiv time={countDownDays} component="Days" />
        <TimeDiv time={countDownHours} component="Hours" />
        <TimeDiv time={countDownMinutes} component="Minutes" />
        <TimeDiv time={countDownSeconds} component="Seconds" />
      </div>
    </div>
  );
}

export default App;
