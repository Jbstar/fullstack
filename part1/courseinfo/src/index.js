import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.course.name}</h1>;

const Content = (props) => (
  <div>
    {props.course.parts.map((element) => {
      return <Part part={element.name} exercises={element.exercises} />;
    })}
  </div>
);

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Total = (props) => {
  const total = (props.course.parts.map(e => e.exercises)).reduce((a, b) => a + b, 0)
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
