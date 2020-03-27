import React from 'react'
import Language from './Language'

const Country = ({ country }) => {
  console.log(country)
  return (
    <>
      <h2>{country.name}</h2>
      <div>
        <p>Capital: {country.capital}</p>
      </div>
      <div>
        <p>Population: {country.population}</p>
      </div>
      <div>
        <h3>Languages</h3>
      </div>
      <div>
        <Language languages={country.languages} />
      </div>
      <img key={country.name} src={country.flag} height="90" width="160"/>
    </>
  )
}

export default Country