import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import s from './wrapper.module.scss';

function Wrapper() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Wrapper;
