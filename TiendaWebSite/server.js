const express = require('express')
const app = express()

// importar  la conexion  de mongo db desde el archivo conexion.js

const archivoBD =require('./conexion')
/////////////////////////////////////


// Importamos del archivo rutasBackend  de rutas y modelo 

const rutaproducto = require('./rutas/producto')
//////////////////////////////

// importamo body parser con el optenemos la informacion de los formularios 
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))




// ruta ejemplo se llama al puerto 5000/api/usuario/ejemplo
app.use('/api/producto',rutaproducto)




app.get('/', (req,res)=>{
res.end('bienvenidos al servidor backend en ejecucion')


})


// configuramos server basico

app.listen(5000, function(){

    console.log('el servidor esta corriendo correctamente ')

})