import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import Menu from '../../Componentes/Menu/menu'
import Card from '../../Componentes/Card/card'

export default function Lancamentos(){
    
    const [series, setSeries] = useState([]);

    useEffect(() => { load() }, [])

    async function load(){
        try{
            const resposta = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=37c1e287635864c0e5a45148db178cc4&Language=pt-BR');
            setSeries(resposta.data.results);
        }catch(erro){
            console.log(erro);
        }
    }
    return(
        <Fragment>
            <Menu/>
            <div className='content'>
                {series.map((serie) => 
                    <Card serie={serie} key={serie.id}/>
                )}
            </div>
        </Fragment>
    )
}