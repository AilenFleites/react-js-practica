import React from 'react';
import './App.css';
import { Form, Fecha, Pagina, Puntaje } from "./components"

function App() {
  return (
    <div className="App">
      <Form/>
      <Fecha fecha={Date.now}/>
      <Pagina actual={3} maximo={10}/>
      <Puntaje puntaje={3}/>
    </div>
  );
}

export default App;
