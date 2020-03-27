import React from 'react'

const Persons = ({ persons, handleDeletion }) => {
  return (
    <table>
      <tbody>
        {persons.map((person) => 
          <tr key={person.name}>
            <td key={person.name}>{person.name}</td>
            <td key={person.number}>{person.number}</td>
            <td key={person.id}>
              <button onClick={() => handleDeletion(person)}>Delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Persons