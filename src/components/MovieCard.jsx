import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-32 md:w-48 pr-4 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className="rounded-lg" />
        </div>
    )
}

export default MovieCard
