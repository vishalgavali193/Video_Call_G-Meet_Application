import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (input.trim() === "") {
      alert("⚠️ Please enter your name before joining!");
      return;
    }
    navigate(`/room/${input}`);
  };

  return (
    <div className="homepage-container">
      <div className="card">
        <h1>Welcome GMeet!</h1>
        <p>Enter your name to join the room.</p>
        <div className="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Your Name..."
            className="modern-input"
          />
          <button onClick={submitHandler} className="modern-button">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;