import { useEffect, useState } from 'react'
import getGifs from '../server/getGifs'

export function useGifs({ keyword } = {keyword : null}) {
  console.log(keyword)
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
    //const keywordToUse = keyword ? keyword : localStorage.getItem('lastkeyword')
    const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'gif'


    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        if(keyword){
          localStorage.setItem('lastkeyword', keyword)
        }
      })
  }, [keyword])

  return { loading, gifs }
}