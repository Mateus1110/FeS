import React from 'react';
import './CardTemporada.css'

function CardTemporada({ temporada }) {
    const baseImgUrl = 'https://image.tmdb.org/t/p/w200/'
    return (
        <div className="card-temporada">
            <img src={`${baseImgUrl}${temporada.poster_path}`} alt="poster temporada"></img>
            <div className="card-info">
                <h2>{temporada.name}</h2>
                <h3>{temporada.episode_count} episódios</h3>
                <p>{temporada.overview}</p>
            </div>
        </div>
    );
}

export default CardTemporada;