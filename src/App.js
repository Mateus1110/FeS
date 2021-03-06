import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './componentes/header/Header'
import Lancamentos from './paginas/lancamentos/Lancamentos'
import Busca from './paginas/busca/Busca'
import Populares from './paginas/populares/Populares'
import Avaliados from './paginas/avaliados/Avaliados'
import Sobre from './paginas/sobre/Sobre'
import Detalhes from './paginas/detalhes/Detalhes';
import Categoria from './componentes/categoria/Categoria';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Lancamentos}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <Route path='/categoria=:categoriaId' component={Categoria}/>
            <Route path='/busca' component={Busca}/>
            <Route path='/populares' component={Populares}/>
            <Route path='/avaliados' component={Avaliados}/>
            <Route path='/detalhes/:serieId' component={Detalhes}/>
            <Route path='/sobre' component={Sobre}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
