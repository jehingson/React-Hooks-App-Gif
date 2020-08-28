import { useState } from "react"
const apiKey ='3bFHlFy2ctScUWnf5WEZBFAwJefL1d0P' 


export default async function getGits ({keyword = 'morty'} = {}){ 

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=9&offset=0&rating=g&lang=es`

    const res = await fetch(apiURL)
    const response = await res.json()
    const {data = []} = response
    if(Array.isArray(data)){
      const gifs = data.map(image => {
          const {title, id, images} = image
          const url = images.fixed_width.url
          return {title, id, url}
      })
      return gifs
    }
}
