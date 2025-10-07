interface Props {
    nameButton: string;
    placeholder?: string;
}
const SearchBar = ( { nameButton, placeholder = 'Buscar'  } : Props ) => {
  return (
    <div className='search-container'>
        <input type="text" placeholder={placeholder} />
        <button> {nameButton} </button>
    </div>
  )
}

export default SearchBar
