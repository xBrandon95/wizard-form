import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";

function App() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    count: "",
    phone: "",
  });

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  return (
    <div className="App">
      {step === 0 && <Step1 next={next} onInputChange={onInputChange} />}
      {step === 1 && (
        <Step2
          next={next}
          prev={prev}
          onInputChange={onInputChange}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      )}
      {step === 2 && <FinalStep prev={prev} form={form} count={count} />}
    </div>
  );
}

export default App;
