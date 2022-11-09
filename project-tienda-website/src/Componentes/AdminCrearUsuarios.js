import { Fragment } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import '../Estilos/Login.css';

export function CrearUsuarios() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        mail: "",
        name: "",
        rol: ""


    }
    )


    return (

        <Fragment>


            <div class="container-fluid col-6 col-md-6 pt-3 ps-4 bg-success bg-opacity-85 text-white fst-italic" >

                <div id="divProductos"  >



                    <h3>Crear Usuario</h3>

                    <Form.Group className="mb-3" controlId="formBasicUsuNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="user"

                            onChange={(e) => {
                                setDate({ ...data, name: e.target.value })
                            }
                            } placeholder="Ingrese un Nombre de Usuario " />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicUsuMail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="user"

                            onChange={(e) => {
                                setDate({ ...data, email: e.target.value })
                            }
                            } placeholder="Ingrese un Correo Electronico " />

                    </Form.Group>





                    <Form.Group className="mb-3" controlId="formBasicUsuRol">
                        <Form.Label>Usuario Rol</Form.Label>
                        <Form.Control type="user"

                            onChange={(e) => {
                                setDate({ ...data, rol: e.target.value })
                            }
                            } placeholder="usuario rol " />

                    </Form.Group>




                    <Form.Group className="mb-3" controlId="formBasicProNameUsu">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="user"

                            onChange={(e) => {
                                setDate({ ...data, user: e.target.value })
                            }
                            } placeholder="Digite un Nombre de Usuario  " />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicProPassUsu">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="pass"

                            onChange={(e) => {
                                setDate({ ...data, pass: e.target.value })
                            }
                            } placeholder="Digite una Contraseña  " />

                    </Form.Group>






                    <div class="p-2">
                        <Button onClick={CrearUsuario} variant="primary" type="submit">
                            Crear Usuario
                        </Button>
                    </div>



                </div>
            </div>















        </Fragment>


    );

    function CrearUsuario() {

    }
}
