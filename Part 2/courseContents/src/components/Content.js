import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

  const total = parts.reduce((sum, part) => {
    return (sum+part.exercises)
  }, 0)

  return (
    <>
      <ul>
        {parts.map((part) => 
          <Part key={part.id} part={part}/>
        )}
      </ul>
      <p>Total of exercises: {total}</p>
    </>
  )
}

export default Content