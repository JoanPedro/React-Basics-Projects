import React from 'react';
import './App.css'
import Primeiro from './components/basics/Primeiro';
import Fragmento from './components/basics/Fragments';
import SegundoComParametro from './components/basics/SegundoComParametro';
import Aleatorio from './components/basics/Aleatorio';
import Card from './components/layout/Card';

export default _ => {
  const tag = <strong>Olá React!!!</strong>;
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
    <div className="Cards">
      
      <Card titulo="Exercício Aleatório" >
        < Aleatorio min = { 1000 } max = { 2000 }/>
      </Card>
      <p />
      <Card titulo="Exercício Tag">
        { tag }
      </Card>
      <p />
      <Card titulo="Exercício React Fragment" color="#6659C1">
        <Fragmento />
      </Card>
      <p />
      <Card titulo="Exercício Component Params" color="#6659C1">
      < SegundoComParametro 
        titulo = "Segundo Componente"
        subtitulo = "Com parâmetro"
        nota = {10}
      />
      </Card>
      <p />
      <Card titulo="Exercício Primeiro">
        < Primeiro />
      </Card>

    </div>
    </div>
  )
}