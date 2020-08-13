import React from 'react'
import Inicio from '../Inicio'
import Sobre from '../Sobre'
import Contato from '../Contato'
import '../../style.css'
export default function Home() {
  return (
    <div className="home">
      <Inicio/>
      <hr/>
      <Sobre/>
      <hr/>
      <Contato/>
      <hr/>
    </div>
  )
}
