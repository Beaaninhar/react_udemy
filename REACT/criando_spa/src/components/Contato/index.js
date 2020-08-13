import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

export default function Contato() {
  return (
    <div className="home" id="contato">
      <h1>Entre em contato!</h1>
      <h2>Telefone: (44) 3263-6179</h2>
      <h3>Rua da rua da rua, endereço</h3>
      <Link smooth to="#home" style={{color: '#FFF'}}>SUBIR</Link>
    </div>
  )
}
