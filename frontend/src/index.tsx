import ReactDOM from "react-dom";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { CartContextProvider } from "./contexts/CartContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
  <UserContextProvider>
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </ProductsContextProvider>
  </UserContextProvider>,

  document.getElementById("root")
);

reportWebVitals();
