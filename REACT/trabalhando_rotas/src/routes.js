import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Header from './components/Header'
import Produto from './pages/Produto'
import Erro from './pages/Erro'
const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch> // Permite que só uma rota seja carregada por vez
        <Route exact path="/" component={Home} />
        <Route  path="/Sobre" component={Sobre} />
        <Route  path="/Produto/:id" component={Produto} />
        <Route  path="*" component={Erro}/>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;