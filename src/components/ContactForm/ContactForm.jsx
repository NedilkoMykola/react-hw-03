import { Formik} from 'formik';
import * as Yup from "yup";
import { AddContactButton, Error, Input, Label, PhoneForm } from './ContactForm.styled';
import { Icon } from '../Contact/Contact.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



 const PhoneBookSchema = Yup.object().shape({
   name: Yup.string()
     .min(4, 'Too Short!')
     .max(30, 'Too Long!')
     .required('Required'),
   number: Yup.string().
     matches(phoneRegExp, 'Phone number is not valid').
     min(8, "That doesn't look like a phone number").
     required('Required')
 });

const ContactForm = ({onSubmit}) => {

    return (
         <div>
    <h1>PhoneBook</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      
       
          }}
          validationSchema={PhoneBookSchema}
          onSubmit={(values, action) => {
            onSubmit(values);
           action.resetForm();
      }}
    >
      <PhoneForm>
        <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
            <Error name="name" component="span"/>
        <Label htmlFor="Number">Number</Label>
            <Input id="number" name="number" />
            <Error name="number" component="span"/>
            
        <AddContactButton type="submit"><Icon><BsFillTelephonePlusFill/></Icon>Add contact</AddContactButton>
      </PhoneForm>
    </Formik>
  </div>
    )
}

export default ContactForm;