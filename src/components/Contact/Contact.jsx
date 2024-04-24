import { Button, Contact1, ContactInfo, Icon } from "./Contact.styled";
import { MdPerson } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";



const Contact = ({contact, onDelete}) => {
    

    return (
        <Contact1>
            <ContactInfo>
            <p><Icon><MdPerson/></Icon>{contact.name}</p>
            <p><Icon><BsFillTelephoneFill/></Icon>{contact.number}</p>
            </ContactInfo>
            <Button type="button" onClick={()=>onDelete(contact.id)}><Icon><RiDeleteBin6Fill/></Icon> Delete</Button>
        </Contact1>
    )
}

export default Contact;