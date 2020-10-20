import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import Menu from '../../componentes/menu/Menu'
import Card from '../../componentes/card/Card'

export default function Busca(props){
    const urlAPI = 'https://api.themoviedb.org/3/search/tv?api_key=37c1e287635864c0e5a45148db178cc4&language=pt-BR&page=1&' + props.location.search.substring(1)
    const [series, setSeries] = useState([]);

    useEffect(() => { load() }, [props.location.search])

    async function load(){
        try{
            const resposta = await axios.get(urlAPI);
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