import React from 'react'
import MenuItem from './menu-item'

export default function Menu(){
    return(
        <div className='menu-area'>
            <MenuItem text='Categorias' to='categorias'/>
            <MenuItem text='Filmes' to='filmes'/>
            <MenuItem text='Séries' to='series'/>
            <MenuItem text='Lançamentos' to='lancamentos'/>
            <MenuItem text='Populares' to='populares'/>
            <MenuItem text='Favoritos' to='favoritos'/>
            <MenuItem text='Sobre' to='sobre'/>
        </div>
     )
}