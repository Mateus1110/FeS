import React, { Fragment } from 'react'
import './sobre.css'

import Menu from '../../componentes/menu/menu'

export default function Sobre(){
    return(
        <Fragment>
            <Menu/>
            <div className='content-sobre'>
                <h1>Sobre</h1>
                <p>FeS é um site de filmes e séries onde você pode consultar as o conteúdo pesquisando pelo nome do
                filme na barra de pesquisa, ou pelas sessões do menu. As sessões do menu permitem filtrar os filmes e séries
                por categorias, mostrar os novos lançamentos, somente filmes, somente séries, populares e os favoritos que você escolher.
                </p>
                <p>OBS: Este site foi desenvolvido com o único intuito de ganhar experiência em HTML, CSS, JavaScript e React JS.</p>
            </div>
        </Fragment>
    )
}