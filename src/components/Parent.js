import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // ❌ If we do this (without useCallback):
  // const handleChange = (e) => setValue(e.target.value);

  // ✅ Using useCallback (correct way):
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Counter</button>

      <Child onChange={handleChange} />
    </div>
  );
}
