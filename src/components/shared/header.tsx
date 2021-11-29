import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
};