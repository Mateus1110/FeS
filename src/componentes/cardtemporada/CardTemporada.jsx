import React from 'react';
import './CardTemporada.css'

function CardTemporada(props) {
    const baseImgUrl = 'https://image.tmdb.org/t/p/w200/'
    
    return (
        <div className="card-temporada">
            <img src={`${baseImgUrl}${props.temporada.poster_path}`} alt="poster temporada"></img>
            <div className="card-info">
                <h2>{props.temporada.name}</h2>
                <h3>{props.temporada.episode_count} episódios</h3>
                <p>{props.temporada.overview}</p>
            </div>
        </div>
    );
}

export default CardTemporada;