import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

export default function Header() {
  return (
    <header>
      <div className="menu" id="home">
        <nav>
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#sobre">Sobre</Link></li>
            <li><Link to="#contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
