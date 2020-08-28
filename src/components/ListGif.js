import React, { useState, useEffect } from 'react'
import getGits from '../server/getGifs'
import Gif from './Gif'

export default function ListGif({params}) {

  const {keyword} = params;
  const [gifs, setGifts] = useState(
    {loading: false, results: []}
    )


  useEffect(function () {
    setGifts(actualGifs => ({loading: true, results: actualGifs.results}))
    getGits({ keyword })
      .then(response => {
        setGifts({loading: false, results: response })
      })
  }, [keyword])

  if(gifs.loading) return <em> Cargando, porfavor espera... </em>

  return <div className="content-gif">
    {
      gifs.results.map(({ title, url, id }) =>
        <Gif
          title={title}
          url={url}
          id={id}
          key={id}
        />
      )
    }
  </div>

}