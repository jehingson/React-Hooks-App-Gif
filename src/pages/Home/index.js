import React from 'react'
import {Link} from 'wouter'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador", "Venezuela"]

export default function Home(){
    return (
        <>
            <h3>Los Gifs mas poopulares</h3>
            <ul className="gif-populares">
                {POPULAR_GIFS.map((popularGIF) => (
                    <li key={popularGIF}>
                        <Link className="link" to={`/gif/${popularGIF}`}>Gifs de {popularGIF}</Link>
                    </li>
                ))
                }
            </ul>

        </>
    )
}