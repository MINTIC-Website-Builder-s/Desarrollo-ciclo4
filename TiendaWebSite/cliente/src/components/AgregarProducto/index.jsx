import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const AgregarProducto = () => {
    /* Traemos del context la funcion para agregar un producto */


    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrece] = useState('')

    function agregarProducto() {

        var nproducto = {
            name: name,
            img: img,
            price: price,

        }


        console.log(nproducto)

        axios.post('http://localhost:4000/agregarproducto', { name, img, price })
            .then(res => {
                alert(res.data)
            })
            .then(err => { console.log(err) })



    }

    return (

        <div className="container">

            <div className="col container-fluid col-6 col-md-6 pt-3 ps-4  bg-success bg-opacity-85 text-white fst-italic d-flex justify-content-center">
            <h2 className="mt-4">Crear Nuevo Producto</h2>
               
            </div>


            <div className="row"> </div>

            <div class="container-fluid col-6 col-md-6 pt-3 ps-4  bg-success bg-opacity-85 text-white fst-italic d-flex justify-content-center">


                <Form.Group className="mb-5" controlId="formBasicProd">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                        value={name} onChange={(e) => { setName(e.target.value) }}
                        placeholder="Ingrese un Nombre" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicImg">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text"
                        value={img} onChange={(e) => { setImg(e.target.value) }}
                        placeholder="Ingrese un Imagen" />
                </Form.Group>


                <Form.Group className="mb-5" controlId="formBasicPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text"
                        value={price} onChange={(e) => { setPrece(e.target.value) }}
                        placeholder="Ingrese un valor" />
                </Form.Group>
                <div class="p-2">
                        <Button onClick={agregarProducto} variant="primary" type="submit">
                            Agregar Producto
                        </Button>
                    </div>

              
            </div>


        </div>


    )


};

export default AgregarProducto
