
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialValues = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


const salaries1 = {
   Manager: { salary: 1000, tax: "10%" },
   Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
}
   
const team1 = [
   { name: "Misha", specialization: "Manager" },
   { name: "Max", specialization: "Designer" },
   { name: "Vova", specialization: "Designer"},
  { name: "Leo", specialization: "Artist" },]
   

const calculateTeamFinanceReport = (salaries1, team1) => {
    
  const sallary = Object.entries(salaries1).map(salary => {
    const salaryWithTax  = (salary[1].salary + salary[1].salary*(parseInt(salary[1].tax)/100))
    const sallary = salary[0]; 
    return [sallary, salaryWithTax]
  })

  

  console.log(sallary)

  }



  /* see in console
{
   "totalBudgetTeam":4590, // total budget does not match the sum of specializations due to truncation of the fractional part
   "totalBudgetManager":1111,
   "totalBudgetDesigner":1714,
   "totalBudgetArtist":1764,
}
*/
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialValues)
    const [querry, setQuerry] = useState('')
  
 

  const handleFormSubmit = (values) => {
    const isHere = contacts.find(contact => contact.name === values.name);
    if (isHere) {
      return toast.warn('🦄 Contact is already in PhoneBook ',) ;
    }
    const contact = {
      id: nanoid(),
      ...values
    }
    setContacts(prev => [contact, ...prev])
    toast.success('🦄 Contact add ',)
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
    toast.success('🦄 Contact delete ',)
  }

  const filteredContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(querry))
  
  return (
    <>
      <ContactForm onSubmit={handleFormSubmit} /> 
      <SearchBox querry={querry} onSearch={(querry)=>setQuerry(querry)} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      <ToastContainer
      position="top-right"
      autoClose={1500}/>
    </>
  )
}

export default App
