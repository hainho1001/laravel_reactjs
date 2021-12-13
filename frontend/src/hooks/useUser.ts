import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUser = () => {
    const ctx = useContext(UserContext)

    return {
        ...ctx
    }
}