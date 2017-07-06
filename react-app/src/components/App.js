// Dependencias
import React, { Component } from 'react';

// Componentes
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

// Datos
import items from '../data/menu'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Titulo en App.js" items={items}/>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
