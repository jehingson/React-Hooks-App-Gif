import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

export default function Gif({title, id, url}){
    return(
    <Link to={`/get/${id}`} className="Gif-link">
          <em>{title}</em>
          <img loading='lazy' src={url} alt={title}/>
          </Link >
    )
}