import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './Componentes/Header/header';
import Lancamentos from './Paginas/Lancamentos/lancamentos'
import Busca from './Paginas/Busca/busca'
import Sobre from './Paginas/Sobre/sobre'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Lancamentos}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <Route path='/busca' component={Busca}/>
            <Route path='/sobre' component={Sobre}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
