"use client"
import React, { useState, useEffect } from 'react';
import InputButtonComponent from '../components/buttons';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from './config';
import Bob from './laugh.png'
import User from './huhcaattt.gif'

export default function Home() {
  const [displayedInput, setDisplayedInput] = useState<string>('');
  const [displayedOuput, setDisplayedOutput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ user: string, bob: string }[]>([]);
  const [isBobTyping, setIsBobTyping] = useState<boolean>(false); // State variable to track Bob's typing status


//Pretend you are a stupid boy Bob, answer: ?
  const handleUserInput = async (input: string) => {

    setDisplayedInput(input);
    setIsBobTyping(true); // Set Bob's typing status to true while generating a response

    const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser:true});
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: "Pretend you are a stupid boy Bob, answer: ? "+ input }],
      model: 'gpt-3.5-turbo',
    });
    const response = completion.choices[0].message.content
    setDisplayedOutput(response || ''); //if null assign ''
    setChatHistory(prevHistory => [...prevHistory, { user: input, bob: response||''}]);
    setIsBobTyping(false);
  };

return (
  <main className="flex justify-center items-center">
    <div className="bg-blue-200 p-12 text-left w-2/5">
      <h2 className="text-3xl font-bold mb-6">Ask Bob</h2>
      {/* Display chat history */}
      {chatHistory.map((message, index) => (
        <div key={index} className="mb-4">
        {message.user && (
          <div className='flex mb-4'>
          <div className="mr-2">
            <img src={User.src} alt="User Icon" className="w-8 h-12" />
            </div>
            <div>
            <p className="text-600 font-semibold">You:</p>
            <div className="flex flex-col bg-blue-100 p-2.5 rounded-md">
              <p>{message.user}</p>
              </div>
            </div>
        </div>
        )}
        <div className='flex mb-4'>
        <div className="mr-2">
          <img src={Bob.src} alt="User Icon" className="w-8 h-8" />
          </div>
          <div>
          <p className="text-600 font-semibold">Bob:</p>
          <div className="flex flex-col bg-blue-100 p-2.5 rounded-md">
             <p>{message.bob}</p>
            </div>
          </div>
      </div>
      </div>
    ))}
      {/* Display typing indicator when Bob is typing */}
      {isBobTyping && <p className="text-gray-500">Bob is typing...</p>}
      <div className="mb-4">
        <InputButtonComponent onClick={handleUserInput} />
      </div>
    </div>
  </main>
);
    {/* handleUserInput(string -> setDisplayedInput(string)) is passed into onClick of InputButtonComponent */}
}
