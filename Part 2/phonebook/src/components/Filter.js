import React from 'react'

const Filter = ({ handleSearch }) => {
  return (
    <div>
      Name: <input onChange={handleSearch}/>
    </div>
  )
}

export default Filter