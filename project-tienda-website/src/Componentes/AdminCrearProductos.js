import { Fragment } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import '../Estilos/Login.css';


export function CrearProdcutos() {

    const [data, setDate] = useState({
        ID: "",
        Nombre: "",
        Descripcion: "",
        Valor: "",
        Stock: ""


    }
    )


    return (

        <Fragment>


         <div class="container-fluid col-6 col-md-6 pt-3 ps-4 bg-success bg-opacity-85 text-white fst-italic">

            <div id="divProductos"  >



                <h3>Crear Productos</h3>

                <Form.Group className="mb-3" controlId="formBasicProNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="user"

                        onChange={(e) => {
                            setDate({ ...data, Nombre: e.target.value })
                        }
                        } placeholder="Ingrese un Nombre al Producto " />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicProDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="user"

                        onChange={(e) => {
                            setDate({ ...data, Descripcion: e.target.value })
                        }

                        } placeholder="Ingrese un Descripción " />

                </Form.Group>





                <Form.Group className="mb-3" controlId="formBasicProStock">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="user"

                        onChange={(e) => {
                            setDate({ ...data, Stock: e.target.value })
                        }
                        } placeholder="Cantidad en stock " />

                </Form.Group>




                <Form.Group className="mb-3" controlId="formBasicProValorUni">
                    <Form.Label>Valor Unidad</Form.Label>
                    <Form.Control type="user"

                        onChange={(e) => {
                            setDate({ ...data, Valor: e.target.value })
                        }



                        } placeholder="Ingrese un Valor  " />

                </Form.Group>





                <div class="p-2">
                        <Button onClick={CrearUsuario} variant="primary" type="submit">
                        Crear Producto
                        </Button>
                    </div>

            

            </div>
            </div>
        </Fragment>


    );

    function CrearUsuario() {

    }
}
