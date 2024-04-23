"use client"
import React, { useState, useEffect } from 'react';
import InputButtonComponent from '../components/buttons';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from './config';

export default function Home() {
  const [displayedInput, setDisplayedInput] = useState<string>('');
  const [displayedOuput, setDisplayedOutput] = useState<string>('');

  const handleUserInput = async (input: string) => {

    setDisplayedInput(input);
    const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser:true});
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: "Pretend you are a stupid boy Bob, answer: ? "+ input }],
      model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices[0].message.content);
    setDisplayedOutput(completion.choices[0].message.content || ''); //if null assign ''
  };

  return (
    <main className="flex justify-center items-center">
      <div className="bg-blue-200 p-12 text-center w-96">
        <h2 className="text-3xl font-bold mb-6">Ask Bob</h2>
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
