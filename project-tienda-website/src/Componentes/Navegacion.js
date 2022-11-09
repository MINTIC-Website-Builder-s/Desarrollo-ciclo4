import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./login.js";
import { ListaProductosUsuario } from "./UserListaProductos.js";
import { CarritoCompras } from "./UserCarrito.js";
import { CrearUsuarios } from "./AdminCrearUsuarios.js";
import { CrearProdcutos } from "./AdminCrearProductos.js";
import { ListaProductosAdmin } from "./AdminListaProductos";
import { ListaVentas } from "./AdminListaVentas";



export const Navegacion = ({ rol }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/CrearProductos" element={<CrearProdcutos />} />
          <Route path="/CrearUsuarios" element={<CrearUsuarios />} />
          <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
          <Route path="/ListaVentas" element={<ListaVentas />} />
          
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/" element={< Login />} />
          <Route path="/ListaProductosUsuario" element={< ListaProductosUsuario />} />
          <Route path="/CarritoCompras" element={< CarritoCompras />} />
        </Fragment>
      )}
    </Routes>
  );
};