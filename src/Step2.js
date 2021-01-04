function Step2({ next, prev, onInputChange, increment, decrement, count }) {
  return (
    <div>
      <p>
        Email: <input type="email" name="email" onChange={onInputChange} />
      </p>
      <p>
        Phone: <input type="number" name="phone" onChange={onInputChange} />
      </p>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <p>
        <button onClick={() => prev()}>Previous</button>
        <button onClick={() => next()}>Finish</button>
      </p>
    </div>
  );
}

export default Step2;
