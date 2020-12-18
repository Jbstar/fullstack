import React from 'react';

const Filter = ({ value, handleChange }) => (
  <div>
    filter shown with : <input onChange={handleChange} value={value} />
  </div>
);

export default Filter;
