import { Input, Label } from "./SearchBox.styled"



const SearchBox = ({querry, onSearch}) => {
    
    const onInput =(e)=>onSearch(e.target.value.trim().toLowerCase())

    return (

        <>
        <Label htmlFor="firstName">Find contacts by name</Label>
        <Input id="firstName" name="name" value={querry} onChange={onInput} />
     </>
    )
}

export default SearchBox