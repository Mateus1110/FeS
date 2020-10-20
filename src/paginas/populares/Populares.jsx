import React, { Fragment, useEffect, useState } from 'react'
import api_options from '../../dados/api' 
import axios from 'axios'

import Menu from '../../componentes/menu/Menu'
import Card from '../../componentes/card/Card'

export default function Populares(){
    
    const [series, setSeries] = useState([]);

    useEffect(() => { load() }, [])

    async function load(){
        try{
            const resposta = await axios.get('https://api.themoviedb.org/3/tv/popular', api_options());
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
