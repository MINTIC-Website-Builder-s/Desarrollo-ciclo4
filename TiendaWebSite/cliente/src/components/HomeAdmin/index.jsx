import React from "react";

import ProductsA from "../ProductsA";
import  NavMenuAdmin  from '../NavMenuAdmin';
import styles from './styles.module.scss'


const HomeAdmin = () => {
  return (
    <div className={styles.home}>
      <NavMenuAdmin/>
      
      <ProductsA />
     
    </div>
  );
};

export default HomeAdmin;
