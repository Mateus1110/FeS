import React from 'react'
import MenuItem from './Menu-item'

export default function Menu(){    
    return(
        <div className='menu-area'>
            <MenuItem text='Melhor avaliados' to='avaliados'/>
            <MenuItem text='Lançamentos' to='lancamentos'/>
            <MenuItem text='Populares' to='populares'/>
            <MenuItem style={{display:'none'}} text='Busca' to='busca'/>
            <MenuItem text='Sobre' to='sobre'/>
        </div>
     )
}
