import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result'



const App = () => {
  const [ searchResult, setSearchResult] = useState([]) 
  const [ countries, setCountries] = useState([])
  //const [ searchWord, setSearchWord ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(event.target.value.toLowerCase()))
    console.log(filteredCountries);
    setSearchResult(filteredCountries)
  }

  return (
    <>
      <form>
        <div>
          Find countries: <input onChange={handleFilterChange}/>
        </div>
      </form>

      <Result searchResult={searchResult}/>
    </>
  );
}

export default App;
