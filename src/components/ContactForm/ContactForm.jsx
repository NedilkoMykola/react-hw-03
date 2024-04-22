import { Field, Form, Formik } from 'formik';
import { Input, Label, PhoneForm } from './ContactForm.styled';




const ContactForm = ({onSubmit}) => {
    

    return (
         <div>
    <h1>PhoneBook</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      
       
      }}
      onSubmit={(values)=>onSubmit(values)}
    >
      <PhoneForm>
        <Label htmlFor="firstName">Name</Label>
        <Input id="firstName" name="name"   />

        <Label htmlFor="Number">Number</Label>
        <Input id="number" name="number"  />
        <button type="submit">Add contact</button>
      </PhoneForm>
    </Formik>
  </div>
    )
}

export default ContactForm;