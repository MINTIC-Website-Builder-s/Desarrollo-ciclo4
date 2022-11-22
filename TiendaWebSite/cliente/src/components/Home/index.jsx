import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import  NavMenuCliente  from '../NavMenuCliente';
import styles from './styles.module.scss'


const Home = () => {
  return (
    <div className={styles.home}>
      <NavMenuCliente/>
      <Cart />
      <Products />
     
    </div>
  );
};

export default Home;
