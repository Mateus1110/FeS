import React from 'react'
import './card.css'

export default function Card(){
    return(
        <div className='card'>
            <div className='card-image'>
                <img src="https://www.emaisgoias.com.br/wp-content/uploads/2020/03/Vi%C3%BAva-Negra-Marvel-divulga-trailer-final-e-novo-p%C3%B4ster-620x450.jpg" alt=''/>
            </div>
            <div className='card-content'>
                <h4>Viúva negra</h4>
                <p>2020</p>
                <div className='rate'>
                    <span className='material-icons'>star_rate</span>
                    8.5
                </div>
            </div>
        </div>
    )
}