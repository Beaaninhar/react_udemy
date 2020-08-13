import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
const Routes = () =>  {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default Routes;

