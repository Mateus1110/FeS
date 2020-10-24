import React, { useState, useEffect } from 'react'
import api_options from '../../dados/api'
import axios from 'axios'
import MenuItem from './Menu-item'

export default function Menu(props){    
    
    const [categorias, setCategorias] = useState([]);

    useEffect(() => { load() }, [])

    async function load(){
        try{
            const resposta = await axios.get('https://api.themoviedb.org/3/genre/tv/list', api_options());
            setCategorias(resposta.data.genres);
        }catch(erro){
            console.log(erro);
        }
    }

    function handleChange(event){
        event.preventDefault()
        const id_categoria = document.getElementById('categoria_selector').value
        props.history.push('/categoria=' + id_categoria);
    }
    
    return(
        <div className='menu-area'>
            <select id='categoria_selector' onChange={handleChange}>
                <option value='10759'>Categorias</option> 
            {categorias.map((categoria) => 
                <option value={categoria.id} key={categoria.id}>{categoria.name}</option>
            )}
            </select>
            <MenuItem text='Melhor avaliados' to='avaliados'/>
            <MenuItem text='Lançamentos' to='lancamentos'/>
            <MenuItem text='Populares' to='populares'/>
            <MenuItem style={{display:'none'}} text='Busca' to='busca'/>
            <MenuItem text='Sobre' to='sobre'/>
        </div>
     )
}
