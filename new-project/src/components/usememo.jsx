import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

export default function Usem() {
      const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🔥 A function that simulates a heavy calculation
  const expensiveCalculation = (num) => {
    console.log("Running heavy calculation...");
    return num * 2;
  };

  // ✅ useMemo caches the result unless `count` changes
  const doubleCount = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔢 useMemo Example</h2>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>

      <hr />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
}
