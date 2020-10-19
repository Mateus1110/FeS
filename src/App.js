import React from 'react';
import './App.css';

import Header from './Componentes/Header/header';
import Menu from './Componentes/Menu/menu';
import Card from './Componentes/Card/card'

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <main>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </main>
    </div>
  );
}

export default App;
