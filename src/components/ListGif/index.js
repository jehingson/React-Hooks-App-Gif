import React from 'react'
import Gif from '../Gif'
import './styles.css'

export default function ListGif({gifs}) {

  return <div className="ListGifs">
    {
      gifs.map(({ title, url, id }) =>
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