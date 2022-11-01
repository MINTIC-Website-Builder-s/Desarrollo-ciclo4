import {TYPES} from "../Action/CarritoAction";

export const carritoInitialState ={
    productos:[
        {id:1, name:"Guantes Unidades dependiendo de tallas", price:36},
        {id:2, name:"Barrilla Tamaños de 6 metros y define las pulagas",price:40},
        {id:3, name:"Brea  sintetica por 6 kg",price:56},{id:1, name:"Guantes Unidades dependiendo de tallas", price:36},
        {id:4, name:"Cemento bulto 50 libras ",price:65},
        {id:5, name:"Mineral bolsa por 6 kg",price:35},
    ],
    cart:[],
};

export function CarritoReducer(state,action){
    switch (action.type) {
    case TYPES.ADD_TO_CART:{
       let newItem = state.productos.find((productos) => productos.id === action.payload);
       //console.log(newItem);

       let itemInCart = state.cart.find((item) => item.id === newItem.id);

       return itemInCart
        ?{...state,
        cart:state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1 }
        : item),
        }
    
        :{
        ...state,
        cart:[...state.cart,{...newItem, quantity: 1 }],
       };
 }
    case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find(item => item.id === action.payload);
        return itemToDelete.quantity > 1 
        ?{
            ...state,
            cart: state.cart.map((item) => 
                item.id === action.payload ? {...item,quantity:item.quantity -1}
                :item),
        }
    :{
        ...state,
        cart: state.cart.filter((item) =>item.id !== action.payload),
    }
}
    case TYPES.REMOVE_ALL_FROM_CART:{
        return{
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        }
    }
    case TYPES.CLEAR_CART:
        return carritoInitialState;
        default:
            return state;
}
}
       
