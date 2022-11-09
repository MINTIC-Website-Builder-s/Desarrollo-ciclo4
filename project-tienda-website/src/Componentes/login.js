import { Fragment } from "react";
import { useState } from "react";
import JsonData from "../data/UsuariosEjemplo.json";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import '../Estilos/Login.css';


export function Login() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        date: ""
    }
    )


    return (

        <Fragment>
            <div class="container-fluid col-6 col-md-6 pt-3 ps-4 bg-success bg-opacity-85 text-white ">
                <div id="divLogin">
                    <h3>Login Store Website</h3>

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



                    <div class="p-2">
                        <Button onClick={VerInfo} variant="primary" type="submit">
                            Validar
                        </Button>
                    </div>



                </div>
            </div>
        </Fragment>


    );

    function Validacion(usuarioNombre, contrasena) {

        var decision = false;
        var datos = JsonData; //Integra o con express o con mongoDb   


        for (const usuario of datos) {
            if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
                decision = true;
            }
        }
        return decision;
    }



    function VerInfo() {

        // eslint-disable-next-line eqeqeq

        console.log(Validacion(data.user, data.pass))
        if (Validacion(data.user, data.pass)) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }
    }
}




