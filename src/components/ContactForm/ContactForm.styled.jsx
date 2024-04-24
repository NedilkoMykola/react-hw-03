import styled from '@emotion/styled'

import {  Form, Field, ErrorMessage} from 'formik';

export const PhoneForm = styled(Form)`
    display: flex;
    width: 400px;
    margin: 30px 0;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
`

export const Input = styled(Field)`
    
    height: 40px;
    border-radius: 5px;
    font-size: 20px;

`
export const Label = styled.label`
    text-align: left;
    margin-top: 15px;
`

export const AddContactButton = styled.button`
    width: 250px;
    margin: 0 auto;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 20px;

` 
export const Error = styled(ErrorMessage)`
    color: red;
    font-weight: 500;
`


