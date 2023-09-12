import React from 'react';
import s from './header.module.scss';

function Header() {
  return (
    <header>
      <h1 className={s.title}>Notes</h1>
    </header>
  );
}

export default Header;
