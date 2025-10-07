import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'

const GifsApp = () => {
  return (
    <>
        <div className='content-center'>

        <h1> Esta es una app</h1>
        <p> Descubre y comparte el gift por defecto</p>
        </div>

        {/* Search */}
        <div className='search-container'>
            <input type="text" placeholder='Buscar gifs' />
            <button>Buscar</button>

        </div>

        {/* busquedas previas */}
        <div className='previous-searches'>
            <h4>Busquedas previas</h4>
            <ul className='previous-searches-list'>
                <li>Goku</li>
                <li>Vegeta</li>
                <li>Piccolo</li>
                <li>Freezer</li>
            </ul>
        </div>

        {/* Gifs */}
        <div className='gifs-container'>
            {
                mockGifs.map( gif => (
                
                    <div key={gif.id} className='gif-card'>
                        <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                        <h3> {gif.title} </h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>
                    </div>
                ))}           
        </div>
    </>
  )
}

export default GifsApp
