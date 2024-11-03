"use client"
import {useState} from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Counter: {counter}</h1>
      <button onClick={increaseCounter} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">CLICK</button>
    </div>
  );
}
