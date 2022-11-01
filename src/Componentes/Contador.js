
//import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

/*const initialState={Contador:0};

function reducer(state, action){
    switch (action.type) {
        case "INCREMENT":
            return{Contador:state.Contador+1};
        case "DECREMENT":
            return{Contador:state.Contador-1};
        default:
            return state;
    }
   
}

const Contador = () =>{
    //const [count, setCount]=useState(0);
    const [state, dispatch]=useReducer(reducer, initialState);

    //const sumar =()=> setCount(count+1);
    const sumar =()=> dispatch({type:"INCREMENT"});
    //const restar =()=> setCount(count-1);
    const restar =()=> dispatch({type:"DECREMENT"});
    
    return(
        <div style={{textAlign:"center"}}>
            <h2>Contador Reducer</h2>
            <nav>
                <button onClick={sumar}>+</button >
                <button onClick={restar}>-</button>
            </nav>
            <h3>state.contador</h3>
            
        </div>
    );
    }export default Contador;*/