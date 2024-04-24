import Contact from "../Contact/Contact";
import { ContactItem, ContactsList } from "./ContactList.styled";



const ContactList = ({contacts, onDelete}) => {
    


    return (
        <ContactsList>
            {contacts.map(contact => {
                return <ContactItem key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete} />
           </ContactItem>
})}
        </ContactsList>
    )
}
export default ContactList;