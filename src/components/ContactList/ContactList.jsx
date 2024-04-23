import Contact from "../Contact/Contact";
import { ContactItem } from "./ContactList.styled";



const ContactList = ({contacts, onDelete}) => {
    


    return (
        <ul>
            {contacts.map(contact => {
                return <ContactItem key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete} />
           </ContactItem>
})}
        </ul>
    )
}
export default ContactList;