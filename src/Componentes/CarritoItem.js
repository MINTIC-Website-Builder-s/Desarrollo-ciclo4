const CarritoItem = ({data, delFromCart}) =>{
    let {id, name, price, quantity} = data;
    return(
        <div style={{borderBotton:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00 * {quantity} = ${price * quantity}.00</h5>
            <button onClick={()=> delFromCart(id)}>Eliminar uno</button>
            <button onClick={()=> delFromCart(id,true)}>Eliminar todos</button>
        </div>
    );
};
export default CarritoItem;

