import React, { useState } from 'react';
import { dummyProducts } from '../service/dummy';

export const ProductsContext = React.createContext(Object ());

export function ProductsContextProvider({children}: any) {
  const [datas] = useState(dummyProducts);

  const dataProduct = {
    loading: false,
    datas
  }

  return ( 
    <ProductsContext.Provider value={dataProduct} >
        { children }
    </ProductsContext.Provider>
 );
};