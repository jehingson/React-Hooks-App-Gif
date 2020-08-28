import React from 'react'
import Spinner from '../../components/Spinner'
import ListGif from '../../components/ListGif'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return <>
    {loading
      ? <Spinner />
      : <ListGif gifs={gifs} />
    }

  </>
}