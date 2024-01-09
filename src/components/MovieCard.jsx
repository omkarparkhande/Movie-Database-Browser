// MovieCard.js
import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <img src={props.posterUrl} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.releaseDate}</p>
            {/* Additional movie details */}
        </div>
    );
};

export default MovieCard;
