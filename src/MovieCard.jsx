import React from 'react'

function MovieCard({Film}) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={Film.image} className="card-img-top" alt={Film.name} />
            <div className="card-body">
                <h5 className="card-title">{Film.name}</h5>
                <p className="card-text">{Film.description}</p>
                <p className="card-text">Rating: {Film.note}</p>
            </div>
        </div>
    )
}

export default MovieCard
