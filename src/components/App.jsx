
import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid'
import SearchBox from './SearchBox/SearchBox'

const initialValues = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {
  const [contacts, setContacts] = useState(initialValues)
    const [querry, setQuerry] = useState('')
  
 

  const handleFormSubmit = (values) => {
    const contact = {
      id: nanoid(),
      ...values
    }
   setContacts(prev => [contact, ...prev])
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }



  const filteredContacts = contacts.filter(contact=>contact.name.includes(querry))
  
  return (
    <>
      <ContactForm onSubmit={handleFormSubmit} /> 
      <SearchBox querry={querry} onSearch={(querry)=>setQuerry(querry)} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  )
}

export default App