import React from "react";
import { Route, Switch } from "react-router-dom";
import {Home, About, Error, User} from './components';
 
export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route component={Error} />
      </Switch>
    </>
  )
}