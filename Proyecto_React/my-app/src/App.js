

//import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Navbar } from "./Navbar";
//import { Navigation } from "./Navigation";

import {HOME,LOGIN,LOGOUT,ADMIN,VENTAS,PRODUCTOS,CLIENTE,CARRITOCOMPRAS} from './config/roots/paths';

import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Admin from './Componentes/Admin';
import Logout from './Componentes/Logout';
import Ventas from './Componentes/Ventas';
import Productos from './Componentes/Productos';
import Cliente from './Componentes/Cliente';
import CarritoCompras from './Componentes/CarritoCompras';
//import { AuthContextProvider } from "./Contexts/outContexts";


export default function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path ={ HOME } element={<Home/> }/>
<Route path ={LOGIN} element={<Login/> }/>
<Route path ={ ADMIN } element={<Admin/> }/>
<Route path ={ LOGOUT } element={<Logout/> }/>
<Route path ={ VENTAS } element={<Ventas/> }/>
<Route path ={ PRODUCTOS } element={<Productos/> }/>
<Route path ={ CLIENTE } element={<Cliente/> }/>
<Route path ={ CARRITOCOMPRAS } element={<CarritoCompras/> }/>
</Routes>
    </BrowserRouter>

  );
}









/*
const App = () => { 

  const [rol, setRol] = useState('admin')
  return (
    <BrowserRouter>
      <Navbar rol = {rol}/>
      <Navigation rol = {rol}/> 
    </BrowserRouter>

  );
};

export default App;
*/
/*

let nombre = [];
let cantidad = [];
let precioUnitario = []; 
let menu1;
let cliente;
let admin;
let opcion1;
let opcion2;
let counter = 0;


menu1 = "Seleccione su rol\n\n"+
        "1. Administrador\n"+
        "2. Cliente\n";

admin= "(Admin)Ingrese la opción que desee realizar\n\n"+
"1- Ingresar nuevo producto\n"+
"2- Visualizar Productos\n"+
"3- Visualizar ventas realizadas\n"+
"4- Salir\n";

cliente = "(Cliente)Ingrese la opción que desee realizar\n\n"+
        "1- Visualizar productos y seleccionar\n"+
        "2- Ver carrito de compras\n"+
        "3- Salir\n";


while(1){
  opcion1 = parseInt(prompt(menu1));

if((opcion1 <= 0) || (opcion1>2)) {alert("Opcion Inválida");}  
else if (opcion1 === 1) {
      do{                                                         //opciones para el administrador
        opcion2 = parseInt(prompt(admin));
      switch(opcion2){
          case 1:
            ingresarProducto();
            counter++;
              break;
          case 2:
            visualizarProductos();
          break;
          case 3:
            alert("crear funcion para Visualizar ventas realizadas");
          break;
          default:
              break;
        }   
        }while(opcion2 <= 3);        
} 

else{
  do{                                         //opciones para cliente
    opcion2 = parseInt(prompt(cliente));
  switch(opcion2){
      case 1:
        alert("crear funcion para Visualizar productos y seleccionar");
          break;
      case 2:
        alert("crear funcion para Ver carrito de compras");
      break;
      default:
          break;
  }
  }while(opcion2 <= 2);

}

}

// DESARROLLO DE FUNCIONES PARA CADA OPCION:
/*
Funcion para crear productos nuevos, solo puede acceder administrador

function ingresarProducto(){
  nombre[counter] = prompt("Digite Producto");
  cantidad[counter] = prompt("Digite cantidad");
  precioUnitario[counter] = prompt("Digite Precio unitario");
  alert("Producto agregado satisfactoriamente !!");
}

/*
  Funcion para visualizar productos, solo accede administrador


 function visualizarProductos(){
  let acumulador = "";
  for (let index = 0; index < counter; index++) {
    acumulador = acumulador + "Producto : "+nombre[index]+"\t"+"\t"+
                              "Cantidad : "+cantidad[index]+"\t"+"\t"+
                              "Precio :"   +precioUnitario[index]+
                              "\n";
  }
  alert(acumulador);


}

*/








