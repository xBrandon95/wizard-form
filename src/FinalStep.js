import React from "react";

function FinalStep({ form, count }) {
  const { name, surname, email, phone } = form;

  return (
    <div>
      <p>Name:{name}</p>
      <p>Surname:{surname}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Count: {count}</p>
    </div>
  );
}

export default FinalStep;
