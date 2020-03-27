import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import contactService from './services/Contacts'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    const value = event.target.value
    setSearch(value)
    if(value === ''){
      return(
        contactService
        .getAll()
        .then(allContacts => {
        setPersons(allContacts)
      }))
    }
    setPersons(persons.filter(p => p.name.toLowerCase().includes(value.toLowerCase())))
  }

  const handleClick = (event) => {
    event.preventDefault()
    const contact = persons.find(p => p.name === newName)
    if(contact !== undefined){
      if(window.confirm(`${newName} already exists in the phonebook, replace the old number with a new one?`)){
        const modifiedContact = {
          ...contact,
          number: newNumber
        }
        console.log(modifiedContact);
        contactService
        .update(modifiedContact.id, modifiedContact)
        .then(modified =>{
          setPersons(persons.map(p => p.id === modifiedContact.id ? modified : p))
          setSuccessMessage(`Contact ${modifiedContact.name} was modified successfully`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information for user ${modifiedContact.name} has already been removed`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }
    }
    else{
      const newContact = {
        name: newName,
        number: newNumber
      }

      contactService
      .create(newContact)
      .then(contact => {
        setPersons(persons.concat(contact))
        setSuccessMessage(`Added ${contact.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
    }
  }

  const handleDeletion = (contact) => {
    console.log(contact);
    if(window.confirm(`Are you sure you want to remove ${contact.name}?`)){
      contactService
      .deletion(contact.id)
      .then(
        alert(`Contact: ${contact.name} was removed successfully`)
      )
    }
    
    setPersons(persons.filter(p => p.id !== contact.id))
  }

  return (
    <>
      <Notification className="error" message={errorMessage}/>
      <Notification className="success" message={successMessage}/>
      <h2>Filter</h2>
        <Filter handleSearch={handleSearch} />
      <h2>Add new</h2>
        <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleClick={handleClick} />
      <h2>Phonebook</h2>
        <Persons persons={persons} handleDeletion={handleDeletion} />
    </>
  )
}

export default App