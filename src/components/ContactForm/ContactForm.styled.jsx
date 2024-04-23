import styled from '@emotion/styled'

import {  Form, Field} from 'formik';

export const PhoneForm = styled(Form)`
    display: flex;
    width: 400px;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
`

export const Input = styled(Field)`
    max-width: 90%;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 20px;

`
export const Label = styled.label`
    text-align: left;
    
`


