import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text}) => (<div><p>{text}</p></div>)
const Votes = ({nbVote}) => (<div><p>has {nbVote} votes</p></div>)
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Title = ({text}) => <h1>{text}</h1>

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const changePoints = (indexToChange, newValue) => {
    const copy = [...points];
    copy[indexToChange] = newValue;
    setPoints(copy);
  } 

  const nextAnecdote = newValue => {
    setSelected(newValue)
  }

  const getMostPopular = (arr) => arr.indexOf(Math.max(...arr))

  const randomIndex = (arr) => Math.floor(Math.random() * arr.length)

  return (
    <div>
      <Title text='Anecdote of the day'/>
      <Anecdote text={props.anecdotes[selected]}/>
      <Button text={'Next anecdote'} handleClick={() => nextAnecdote(randomIndex(anecdotes))}/>
      <Button text={'Vote'} handleClick={() => changePoints(selected ,points[selected] + 1)}/>
      <Votes nbVote={points[selected]}/>
      <Title text='Anecdote wiht most votes'/>
      <Anecdote text={props.anecdotes[getMostPopular(points)]}/>
      <Votes nbVote={points[getMostPopular(points)]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)