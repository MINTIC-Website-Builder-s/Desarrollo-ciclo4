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
*/ 
function ingresarProducto(){
  nombre[counter] = prompt("Digite Producto");
  cantidad[counter] = prompt("Digite cantidad");
  precioUnitario[counter] = prompt("Digite Precio unitario");
  alert("Producto agregado satisfactoriamente !!");
}

/*
  Funcion para visualizar productos, solo accede administrador
*/ 

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










