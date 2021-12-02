import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Home, About, Error, User, Cart} from '../pages';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/cart" component={Cart} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  )
}