import { createContext, useReducer } from 'react';
import { UserReducer } from '../reducers/UserReducer';
import TokenService from '../service/TokenService';

export const UserContext = createContext(Object ());

export function UserContextProvider({children}: any) {

  const initialState = { user: TokenService.getUser()};

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = (payload: any) => {
    dispatch({type: 'LOGIN', payload});
  }

  const valueContext = {
    login,
    ...state
  }

  return ( 
    <UserContext.Provider value={valueContext} >
        { children }
    </UserContext.Provider>
 );
};