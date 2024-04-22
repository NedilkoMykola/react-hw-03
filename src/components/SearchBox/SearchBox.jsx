


const SearchBox = ({querry, onSearch}) => {
    
    const onInput =(e)=>onSearch(e.target.value)

    return (

        <div>
            <label htmlFor="firstName">Search by name</label>
        <input id="firstName" name="name" value={querry} onChange={onInput} />
     </div>
    )
}

export default SearchBox