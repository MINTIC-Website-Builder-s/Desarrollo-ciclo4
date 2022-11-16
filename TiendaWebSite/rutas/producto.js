
const express = require('express')
const router = express.Router()







const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducto = new eschema({
    nombre: String,
    stock:String,
    descripcion:String,
    valor:String,
    imagen:String,
    idproducto: String
})
const ModeloProducto = mongoose.model('producto', eschemaproducto)
module.exports = router



/*
router.get ('/ejemplo', (req ,res)=>{
res.end('carga de ruta ejemplo')

})*/

// metodo post agregar usuario 
router.post('/agregarproducto', (req, res) => {

    const nuevoproducto = new ModeloProducto({
        nombre: req.body.nombre,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        valor:req.body.valor,
        imagen:req.body.imagen,
        idproducto: req.body.idproducto
    })
    nuevoproducto.save(function (err) {
        if (!err) {
            res.send('Producto agregado correctamente')

        } else {
            res.send(err)
        }

    })

})

// metodo obetener todos los usuarios 


router.get('/obtenerproducto', (req, res) => {

    ModeloProducto.find({}, function (docs, err) {

        if (!err) {
            res.send(docs)

        } else {
            res.send(err)
        }

    })

})


/// obtener data de usuario 
router.post('/obtenerdataproducto', (req, res) => {

    ModeloProducto.find({ idproducto: req.body.idproducto }, function (docs, err) {

        if (!err) {
            res.send(docs)

        } else {
            res.send(err)
        }

    })

})


//actualiza datos 
router.post('/actualizaproducto', (req, res) => {

    ModeloProducto.findOneAndUpdate({ idproducto: req.body.idproducto }, {
        nombre: req.body.nombre,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        valor:req.body.valor,
        imagen:req.body.imagen,




    }, (err) => {

        if (!err) {
            res.send('producto actualizado correctamente')

        } else {
            res.send(err)
        }

    })

})


//borrarusuario

router.post('/borrarproducto', (req, res) => {

    ModeloProducto.findOneAndDelete({ idproducto: req.body.idproducto },(err)=> {
        if (!err) {
            res.send('producto borrado correctamente')

        } else {
            res.send(err)
        }


    })

})