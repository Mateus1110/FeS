import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from './components/header/Header'
import Lancamentos from './pages/lancamentos/Lancamentos'
import Busca from './pages/busca/Busca'
import Sobre from './pages/sobre/Sobre'

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
