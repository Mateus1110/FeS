import React from 'react'
import MenuItem from './Menu-item'

export default function Menu(){
    return(
        <div className='menu-area'>
            <MenuItem text='Categorias' to='categorias'/>
            <MenuItem text='Filmes' to='filmes'/>
            <MenuItem text='Melhor avaliados' to='avaliados'/>
            <MenuItem text='Lançamentos' to='lancamentos'/>
            <MenuItem text='Populares' to='populares'/>
            <MenuItem text='Favoritos' to='favoritos'/>
            <MenuItem text='Busca' to='busca'/>
            <MenuItem text='Sobre' to='sobre'/>
        </div>
     )
}
