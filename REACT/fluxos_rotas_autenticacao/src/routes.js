import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Painel from './pages/Painel'
import autenticado from './auth'

//Verifica se está autenticado 
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    autenticado() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname: '/', state: {from: props.location}}} />
    )
  )}/>
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/Painel" component={Painel} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;