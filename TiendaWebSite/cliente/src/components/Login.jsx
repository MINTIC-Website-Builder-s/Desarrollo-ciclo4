import { Fragment } from "react";
import { useState } from "react";
import React from "react";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import JsonData from "../data/UsuariosEjemplo.json";

function Login() {

  const [data, setDate] = useState({
    user: "",
    pass: "",
    rol: ""
  }
  )

  const [url, setURL] = useState("");


  return (

    <Fragment>

      <center>
        <div id="divLogin" class="container-fluid col-6 col-md-4 pt-3 ps-4 bg-success bg-opacity-85 text-white " >






          <h1 className="fw-bolder">Tienda-WebSite</h1>
          <h4>Ingrese Usuario y Contraseña </h4>

          <Form.Group className="mb-3" controlId="formBasicUsuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="user"

              onChange={(e) => {
                setDate({ ...data, user: e.target.value })
              }
              } placeholder="Ingrese un Usuario " />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="pass"
              onChange={(e) => {
                setDate({ ...data, pass: e.target.value })
              }
              }
              placeholder="Ingrese una Contraseña" />
          </Form.Group>


          <br></br>
          <Link to={url}>
            <Button className="" onClick={VerInfo}>Ingresar</Button>
          </Link>
          <br></br>
          <hr></hr>
        </div>


      </center>
    </Fragment>


  );

  function Validacion(usuarioNombre, contrasena) {

    var rol = "";
    var datos = JsonData; //Integra o con express o con mongoDb   


    for (const usuario of datos) {
      if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
        rol = usuario.Rol
      }
    }
    return rol;
  }



  function VerInfo() {


    console.log(Validacion(data.user, data.pass));
    // eslint-disable-next-line eqeqeq
    if (Validacion(data.user, data.pass) === "Admin") {
      setURL("/admin")
     
    } else if (Validacion(data.user, data.pass) === "Cliente") {
      setURL("/usuario")
    } else {
      alert("Los datos son incorrectos")
    }
  }
}


export default Login