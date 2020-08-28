import React from 'react'
import './gif.css'

export default function Gif({title, id, url}){
    return(
    <a href={`#${id}`} className="gifs">
          <img src={url} alt={title}/>
        <em className="title">{title}</em>
          </a>
    )
}