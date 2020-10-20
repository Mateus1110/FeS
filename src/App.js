import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './Componentes/Header/header';
import Lancamentos from './Paginas/Lancamentos/lancamentos'
import Sobre from './Paginas/Sobre/sobre'

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Lancamentos}/>
            <Route path='/lancamentos' component={Lancamentos}/>
            <Route path='/sobre' component={Sobre}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
