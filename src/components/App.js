import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  useEffect(() => {
    document.addEventListener("keydown", handleArrowClick);
    return () => {
      document.removeEventListener("keydown", handleArrowClick);
    };
  });

  const reset = () => {
    setBallPosition({ left: "0px", top: "0px" });
    setX(0);
    setY(0);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={buttonClickHandler}>
          Click For One Ball
        </button>
      );
    }
  };

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleArrowClick = (event) => {
    if (event.keyCode === 39) {
      let newX = Number(x + 5);
      let newL = `${newX}px`;
      let newBall = {
        left: newL,
        top: `${y}px`
      };
      setBallPosition(newBall);
      setX(newX);
    } else if (event.keyCode === 37) {
      let newX = Number(x - 5);
      let newL = `${newX}px`;
      let newBall = {
        left: newL,
        top: `${y}px`
      };
      setBallPosition(newBall);
      setX(newX);
    } else if (event.keyCode === 40) {
      let newY = Number(y + 5);
      let newT = `${newY}px`;
      let newBall = {
        left: `${x}px`,
        top: newT
      };
      setBallPosition(newBall);
      setY(newY);
    } else if (event.keyCode === 38) {
      let newY = Number(y - 5);
      let newT = `${newY}px`;
      let newBall = {
        left: `${x}px`,
        top: newT
      };
      setBallPosition(newBall);
      setY(newY);
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
