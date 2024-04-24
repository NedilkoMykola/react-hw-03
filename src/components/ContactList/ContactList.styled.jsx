import styled from '@emotion/styled'


export const ContactsList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
` 

export const ContactItem = styled.ul`
    margin-bottom: 15px;
    
:last-child{
    margin-bottom: 0;
}
`
