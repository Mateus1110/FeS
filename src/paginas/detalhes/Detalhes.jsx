import React, { Fragment, useEffect, useState } from 'react'
import './Detalhes.css'

import api_options from '../../dados/api' 
import axios from 'axios'
import CardTemporada from '../../componentes/cardtemporada/CardTemporada'
import Network from '../../componentes/cardnetwork/Network'

export default function Detalhes(props){
    const { serieId }= props.match.params
    const baseImgUrl = 'https://image.tmdb.org/t/p/w300/'
    const baseBgImgUrl = 'https://image.tmdb.org/t/p/original/'
    
    const [serie, setSerie] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [temporadas, setTemporadas] = useState([]);
    const [networks, setNetworks] = useState([]);

    useEffect(() => { load() }, [])

    async function load(){
        try{
            const serie = await axios.get(`https://api.themoviedb.org/3/tv/${serieId}`, api_options());
            setSerie(serie.data);
            setGeneros(serie.data.genres);
            setTemporadas(serie.data.seasons);
            setNetworks(serie.data.networks);
        }catch(erro){
            console.log(erro);
        }
    }
    return(
        <Fragment>
            <div className="serie-details">
                <div className="bg" style={{backgroundImage: `url(${baseBgImgUrl}${serie.backdrop_path})`}}>
                </div>
                <button id='back-button' className='back-button' onClick={props.history.goBack}>
                    <span className="material-icons">navigate_before</span>
                    Voltar
                </button>
                <img src={`${baseImgUrl}${serie.poster_path}`} alt="poster_serie"/>
                <div className="serie-text">
                    <h2>{serie.name}</h2>
                    <div className='score'>
                        <span className="material-icons">grade</span>
                        {serie.vote_average}
                    </div>
                    <p className="genres">
                        {String(generos.map(genero=> {return genero.name})).slice(0)}
                    </p>
                    <p className='description'>{serie.overview}</p>
                </div>
            </div>
            <section className='temporadas'>
                <h1 className='titulo-section'>Temporadas</h1>
                {temporadas.map((temporada) => <CardTemporada temporada={temporada} key={temporada.id} categoria={true}/>
                )}
            </section>
            <section className='networks'>
                <h1 className='titulo-section'>Onde assistir:</h1>
                <div className='network-content'>
                    {networks.map((network) => 
                        <Network network={network} key={network.id}></Network>
                    )}
                </div>
            </section>
        </Fragment>
    )
}
