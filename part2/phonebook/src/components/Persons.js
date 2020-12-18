import React from 'react';

const Person = ({ person }) => (
  <div>
    <p>
      {person.name} : {person.number}
    </p>
  </div>
);

const Persons = ({ persons }) =>
  persons.map((person) => <Person key={person.name} person={person} />);

export default Persons;
