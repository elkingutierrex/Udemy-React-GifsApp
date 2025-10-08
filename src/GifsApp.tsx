import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
import GifsList from './gifs/components/GifsList'
import { useState } from 'react'

const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['Goku', 'Boo']);

  const handleTermClicked = (term: string) => {
    console.log({term});
  }

  return (
    <>
        <CustomHeader title='Buscador de gifs' description='Descubre y comparte el gif'/>

        {/* Search */}
        <SearchBar nameButton='Buscar' placeholder='Buscar gifs'/>
     

        {/* busquedas previas */}
        <PreviousSearches searches={previousTerms}
                          onLabelClick={handleTermClicked}/>
    

        {/* Gifs */}
       <GifsList gifs={mockGifs} />
    </>
  )
}

export default GifsApp
