import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Home, About, Error, Cart, Login, Shop} from '../pages';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  )
}