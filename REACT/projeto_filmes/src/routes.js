import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Filme from './pages/Filme'
import Erro from './pages/Erro'

const Routes = () => {
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Filme/:id" component={Filme} />
      <Route path="*" component={Erro}/>
    </Switch>
    </BrowserRouter>
  )
}


export default Routes;
