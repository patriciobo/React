import React from 'react'

const PersonForm = ({ handleNameChange,  handleNumberChange, handleClick}) => {
  return (
    <form>
      <div>
        Name: <input onChange={handleNameChange}/>
      </div>
      <div>
        Number: <input onChange={handleNumberChange}/>
      </div>
      <div>
        <button onClick={handleClick} type="submit">Add</button>
      </div>
    </form>
  )
}

export default PersonForm