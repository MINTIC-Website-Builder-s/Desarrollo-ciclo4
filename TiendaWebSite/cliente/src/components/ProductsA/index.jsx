import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import Button from 'react-bootstrap/Button';


const ProductsA = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToDelete, products } = useContext(CartContext);

 




  return (
    <div className={styles.productsContainer}>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
           
              <Button className="btn btn-danger" > Eliminar</Button>
               

            
          </div>
        ))}
    </div>
  );
};

export default ProductsA;
