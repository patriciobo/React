import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Stats = ({good, neutral, bad}) => {
  if((good+neutral+bad) === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
      <Stat text='Good' value={good}/>
      <Stat text='Neutral' value={neutral}/>
      <Stat text='Bad' value={bad}/>
      <Stat text='All' value={good + neutral+ bad}/>
      <Stat text='Average' value={(good - bad)/(good + neutral + bad)}/>
      <Stat text='Positive' value={(good/good + neutral + bad)*100+'%'}/>
      </tbody>
    </table>
  )
}
const Stat = ({text, value}) => (
  <tbody>
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  </tbody>
)
//Feedback app
/* const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give Feedback</h2>
      
        <Button handleClick={goodClick} text="Good"/>
        <Button handleClick={neutralClick} text='Neutral'/>
        <Button handleClick={badClick} text='Bad'/>
      
      <h2>Statistics</h2>

        <Stats good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) */

//Quotes
const QuotesButton = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  const [mostVoted, setMostVoted] = useState(0)

  const buttonClick = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 0))
    setSelected(random)
  }

  const voteClick = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
    console.log(Math.max(...copy))
    if(Math.max(...copy) === copy[selected]){
      setMostVoted(selected)
    }
  }

  return (
    <>
    <h2>
      {props.anecdotes[selected]}
    </h2>
    <p>Has {votes[selected]} votes</p>
    
    <QuotesButton handleClick={voteClick} text='Vote'/>
    <QuotesButton handleClick={buttonClick} text='Next anecdote'/>

    <h2>{props.anecdotes[mostVoted]}</h2>
    </>
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