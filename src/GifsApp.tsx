import Gifs from './gifs/components/Gifs'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import PreviousSearches from './shared/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'

const GifsApp = () => {
  return (
    <>
        <CustomHeader title='Buscador de gifs' description='Descubre y comparte el gif'/>

        {/* Search */}
        <SearchBar nameButton='Buscar' placeholder='Buscar gifs'/>
     

        {/* busquedas previas */}
        <PreviousSearches searches={['Goku', 'Vegeta']}/>
    

        {/* Gifs */}
       <Gifs gifs={mockGifs} />
    </>
  )
}

export default GifsApp
