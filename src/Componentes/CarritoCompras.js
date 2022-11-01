import { type } from "@testing-library/user-event/dist/type";
import { useReducer} from "react";
import { TYPES } from "../Action/CarritoAction";
import { carritoInitialState, CarritoReducer} from "../Reducers/CarritoReducer";
import CarritoItem from "./CarritoItem";
import ProductItem from "./ProductItem";

const CarritoCompras= () =>{
    const [state, dispatch] = useReducer(CarritoReducer, carritoInitialState);
    const {productos,cart} = state;
    const addToCart = (id) => {
    dispatch({type:TYPES.ADD_TO_CART,payload:id});
    };
      
    const delFromCart=(id,all = false)=>{
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
        }else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})

        }
        
    };

    const ClearCart =()=>{
        dispatch({type:TYPES.CLEAR_CART})};
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {productos.map((productos) => (
                     <ProductItem key={productos.id} data={productos}addToCart={addToCart}/>
                     ))}
            </article>
             <h3>Carrito</h3>
             <article className="box">
             <button onClick={ClearCart}>Limpiar carrito</button>
             {cart.map((item, index) =>(
                <CarritoItem key={index} data={item} delFromCart={delFromCart}/>
            ))}
            </article>
        </div>

    );
};
export default CarritoCompras;
