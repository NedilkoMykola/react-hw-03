import styled from '@emotion/styled'

import {  Form, Field} from 'formik';

export const PhoneForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
`

export const Input = styled(Field)`
    width: 300px;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 20px;

`
export const Label = styled.label`
    text-align: left;
    
`


