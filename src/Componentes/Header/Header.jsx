import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <header>
            <span className="material-icons home">home</span>
            <label className='label-header'>Filmes e Séries</label>
            <input className='input-header' placeholder='Busque por uma série ou filme'></input>
        </header>
    )
}