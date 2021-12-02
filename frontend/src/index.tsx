import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { CartContextProvider } from './contexts/CartContext';

ReactDOM.render(
  <ProductsContextProvider>
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  </ProductsContextProvider>
  ,document.getElementById('root')
);

reportWebVitals();
