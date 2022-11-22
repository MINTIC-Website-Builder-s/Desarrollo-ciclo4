import "./App.scss";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import AgregarProducto from "./components/AgregarProducto";
import HomeAdmin from "./components/HomeAdmin";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  /* Envolvemos la home con el provider del context */


  return (
    <div className="App">




      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Login />} exact></Route>
          <Route path='/admin' element={
            <CartProvider>
              <HomeAdmin />
            </CartProvider>
          } exact></Route>





          <Route path='/usuario' element={
            <CartProvider>
              <Home />
            </CartProvider>
          } exact></Route>


<Route path='/agregarproducto' element={<AgregarProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>





    </div >
  );
};

export default App;
