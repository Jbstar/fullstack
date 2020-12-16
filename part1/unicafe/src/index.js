import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Title = ({ text }) => <h1>{text}</h1>;
const Stat = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);
const Statistics = ({ stats, active}) => {
  if (active) {
    return (
      <div>
        {stats.map((stat) => {
          return <Stat text={stat.text} value={stat.value} />;
        })}
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => setGood(good + 1);
  const incNeutral = () => setNeutral(neutral + 1);
  const incBad = () => setBad(bad + 1);
  const getNumberOfFeedback = () => bad + good + neutral;
  const getAverage = () =>
    getNumberOfFeedback() > 0 ? (-bad + good) / getNumberOfFeedback() : 0;
  const getPositive = () =>
    getNumberOfFeedback() > 0 ? good / getNumberOfFeedback() : 0;

  const stats = [
    {
      text: 'good',
      value: good,
    },
    {
      text: 'neutral',
      value: neutral,
    },
    {
      text: 'bad',
      value: bad,
    },
    {
      text: 'all',
      value: getNumberOfFeedback(),
    },
    {
      text: 'average',
      value: getAverage(),
    },
    {
      text: 'positive',
      value: getPositive() + ' %',
    },
  ];

  return (
    <div>
      <Title text='Give Feedback' />
      <Button handleClick={incGood} text='good' />
      <Button handleClick={incNeutral} text='neutral' />
      <Button handleClick={incBad} text='bad' />
      <Title text='Statistics' />
      <Statistics stats={stats} active={getNumberOfFeedback() > 0} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
