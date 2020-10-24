import React from 'react';
import './Network.css'

function Network( {network} ) {
    const baseImgUrl = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className='network-item'>
            <img src={`${baseImgUrl}${network.logo_path}`} alt="imagem network"/>
            <h3>{network.name}</h3>
        </div>
        );
}

export default Network;