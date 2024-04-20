"use client"
import React, { useState } from 'react';
import InputButtonComponent from '../components/buttons';

export default function Home() {
  const [displayedInput, setDisplayedInput] = useState<string>('');
  const [displayedOuput, setDisplayedOutput] = useState<string>('');

  const handleUserInput = (input: string) => {
    setDisplayedInput(input);
  };
  return (
    <main className="flex justify-center items-center">
      <div className="bg-blue-200 p-12 text-center w-96">
        <h2 className="text-3xl font-bold mb-6">Ask a Question</h2>
        <div className="mb-4"> 
        <InputButtonComponent onClick={handleUserInput} />
        </div>
      
      {displayedInput && (
        <>      
        <p className="mb-4"> User: {displayedInput}</p>
        <p className="mb-4"> Bob: {displayedOuput}</p>
        </>
    )}    


    {/* handleUserInput(string -> setDisplayedInput(string)) is passed into onClick of InputButtonComponent */}

  </div>
</main>
  );
}
