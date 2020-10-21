import React from 'react'
import './Card.css'

export default function Card({ serie }){
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const data = new Date(serie.first_air_date);
    const dataLancamento = data.getFullYear()

    return(
        <div className='card'>
            <div className='card-image'>
                <img src={imgUrl + serie.poster_path} alt=''></img>
            </div>  
            <div className='card-content'>
                <h4>{serie.name}</h4>
                <p>{dataLancamento}</p>
                <div className='rate'>
                    <span className='material-icons'>star_rate</span>
                    {serie.vote_average}
                </div>
            </div>
        </div>
    )
}
