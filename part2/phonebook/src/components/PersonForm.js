import React from 'react';

const PersonForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  nameValue,
  numberValue,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleNameChange} value={nameValue} />
        number: <input onChange={handleNumberChange} value={numberValue} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
