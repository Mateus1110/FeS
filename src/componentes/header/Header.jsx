import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import './Header.css'

function Header(props){
    
    const [search, setSearch] = useState('');

    function buscar(event){
        event.preventDefault()
        props.history.push('/busca?query=' + search);
    }

    return(
        <header id='home'>
            <a href="#home"><span className="material-icons home">home</span></a>
            <label className='label-header'>Filmes e Séries</label>
            <form onSubmit={buscar} action="" onChange={(evento) => setSearch(evento.target.value)}>
                <input className='input-header' name='query' id='query' placeholder='Busque por uma série ou filme'></input>
                <button id='search-button' type='submit'>Buscar</button>
            </form>
        </header>
    )
}

export default withRouter(Header)
