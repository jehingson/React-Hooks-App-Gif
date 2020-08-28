import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'wouter'
import ListGif from '../../components/ListGif'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador", "Venezuela"]

export default function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()
  
  const handleSubmit = event => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
        <button>Buscar</button>
      </form>
      <br />
      <h3 className="App-title">Ultima busqueda</h3>
      <ListGif gifs={gifs} />
      <br />
      <h3 className="App-title">Los Gifs mas poopulares</h3>
      <ul className="App-main">
        {POPULAR_GIFS.map((popularGIF) => (
          <li className="App-results" key={popularGIF}>
            <Link className="link" to={`/search/${popularGIF}`}>Gifs de {popularGIF}</Link>
          </li>
        ))
        }
      </ul>



    </>
  )
}