"use client"
import React, { useState } from 'react';

interface ButtonProps {
  onClick: (input: string) => void;
}
const InputButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
    // onClick function is taken from the page
  const [userInput, setUserInput] = useState("");

  const handleButtonClick = () => {
    onClick(userInput);
    // userInput -> setDisplayedInput(userInput)
  };
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full bg-white p-2 rounded-md"
        placeholder="Type your question here..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleButtonClick}>
        {/* This is a real react button, when it is clicked, call handleButtonClick*/}
        Submit
      </button>
    </div>
  );
}

export default InputButtonComponent;