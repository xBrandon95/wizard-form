function Step1({ next, onInputChange }) {
  return (
    <div>
      <p>
        Name: <input type="text" name="name" onChange={onInputChange} />
      </p>
      <p>
        Surname: <input type="text" name="surname" onChange={onInputChange} />
      </p>
      <p>
        <button onClick={() => next()}>Next</button>
      </p>
    </div>
  );
}

export default Step1;
