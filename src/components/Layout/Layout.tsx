import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../button/Button';
import styles from './styles.module.scss';
import mainLogo from '../../assets/mainLogo.png';

export function Layout() {
  return (
    <div>
      <header className={styles.container}>
        <nav className={styles.buttonsBlock}>
          <Link to="/">
            <Button>Garage</Button>
          </Link>
          <Link to="/winners">
            <Button>Winners</Button>
          </Link>
        </nav>
        <div className={styles.logo}>
          <img src={mainLogo} alt="Logo" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
