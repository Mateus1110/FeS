import React, { Fragment, useEffect, useState } from 'react'
import api_options from '../../dados/api' 
import axios from 'axios'

import Menu from '../../componentes/menu/Menu'
import Card from '../../componentes/card/Card'

export default function Categoria(props){
    const { categoriaId }= props.match.params
    const [series, setSeries] = useState([]);

    useEffect(() => { load() }, [categoriaId])

    async function load(){
        try{
            const resposta = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=${categoriaId}`, api_options());
            setSeries(resposta.data.results);

        }catch(erro){
            console.log(erro);
        }
    }
    return(
        <Fragment>
            <Menu history= {props.history}/>
            <div className='content'>
                {series.map((serie) => 
                    <Card serie={serie} key={serie.id} categoria={true}/>
                )}
            </div>
        </Fragment>
    )
}
