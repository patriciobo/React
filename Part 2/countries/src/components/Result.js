import React from 'react'
import Country from './Country'

const Result = ({searchResult}) => {
  if (searchResult.length > 10) {
    return (
      <p>
        Too many matches
      </p>
    )
  }

  if(searchResult.length > 1 && searchResult.length <= 10){
    return(
      <table>
      <tbody>
        {searchResult.map((country) => 
          <tr key={country.name}>
            <td key={country.name}>{country.name}</td>
          </tr>
        )}
      </tbody>
    </table>
    )
  }

  if(searchResult.length === 1){
    return(
      <>
      <Country country={searchResult[0]}/>
      </>
    )
  }

  return('No results')
}

export default Result