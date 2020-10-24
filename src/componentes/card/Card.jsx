import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

export default function Card(props){
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    const data = new Date(props.serie.first_air_date);

    return(
        <div className='card'>
            <NavLink to={`/detalhes/${props.serie.id}`}>
                <div className='card-image'>
                    <img src={imgUrl + props.serie.poster_path} alt=''></img>
                </div>  
                <div className='card-content'>
                    <h4>{props.serie.name}</h4>
                    <p>{data.getFullYear()}</p>
                    <div className='rate'>
                        <span className='material-icons'>star_rate</span>
                        {props.serie.vote_average}
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
