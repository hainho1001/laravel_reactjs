import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import styles from './header.module.scss';

export function Header() {

  const {itemCount} = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart ({itemCount})</Link>
    </header>
  );
};