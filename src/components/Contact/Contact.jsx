import { Contact1 } from "./Contact.styled";



const Contact = ({contact, onDelete}) => {
    

    return (
        <Contact1>
            <div>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            </div>
            <button type="button" onClick={()=>onDelete(contact.id)}>Delete</button>
        </Contact1>
    )
}

export default Contact;