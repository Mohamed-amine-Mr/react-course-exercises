import { useState } from "react";
import "./index.css";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("march 13 2025");
  date.setDate(date.getDate() + count);

  const handlePlus = () => {
    setCount((c) => c + step);
  };

  const hanleMinuse = () => {
    if (count <= 1) {
      return;
    } else {
      setCount((m) => m - step);
    }
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div>
      <div>
        step: {step}
        <input
          type="range"
          onChange={(e) => setStep(Number(e.target.value))}
          name=""
          min={0}
          max={10}
          id=""
        />
        <button onClick={hanleMinuse}>-</button>
        <input
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
        />
        <button onClick={handlePlus}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
