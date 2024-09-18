import React from 'react'

import MovieCard from './MovieCard'


function MovieList({Movies}) {
    console.log(Movies)
    return (
        <div className="d-flex flex-wrap justify-content-around gap-3">
            {
                Movies.map((film, index) => (
                    <MovieCard key={index} Film={film} />
                ))
            }
        </div>
    )
}

export default MovieList