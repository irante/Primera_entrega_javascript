
let opcion =0;


let precioBanghoGm220t  = 74999;
let precioBanghoCambridgeA220 = 125999;
let precioGigabyteG24f = 84999;
let valorCarrito = 0;
let comprasConfirmadas = 0;
let agregarProducto = 0;

 function elegirOpcion (){
    opcion = parseInt(prompt ("Valor del Carrito: $" + valorCarrito + "\n" + "Articulos Confirmados: " + comprasConfirmadas + "\n" +  "Agregar al carrito: presione el numero para seleccionar el producto\n \n 1 - Pc Bangho Gm220t\n 2 - Pc Bangho Cambridgr A220\n 3- Monitor Gigabyte G24\n 4 - para salir"));

 }


elegirOpcion();
while (opcion != 4){
    switch (opcion) {
        case 1:
            let cantidad = parseInt(prompt("el valor de Pc Bangho Gm220t es de $ " + precioBanghoGm220t + "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
            let confirmar = prompt ("el valor de su compra es: $ " + precioBanghoGm220t* cantidad + "\n" + "Ingrese si para confirmar, no para salir");

            if(confirmar =="si"){
                valorCarrito = valorCarrito + (precioBanghoGm220t * cantidad);
                comprasConfirmadas++;
                
            }
                
            break;


         default:
                alert("opcion incorrecta");
                break;


    }



    if (comprasConfirmadas >=2){
        alert("gracias por Comprar, El valor Total de su compra es: $" + valorCarrito);    // si las compras son dos finaliza el bucle
        break;

    } else if(comprasConfirmadas > 0 && comprasConfirmadas < 2){                      // si hay compras confirmadas
                 agregarProducto = prompt ("desea Agregar otro producto al Carrito si / no");    // pregunta si quiere realizar otra compra
                 switch(agregarProducto){
                    case "no":
                         alert("visualizar el valor de la compra");
                         break;

                    case "si":
                        elegirOpcion();
                        break;
                        
                    default:
                        alert("opcion incorrecta");
                        break;

                 }
                
                 
               
             } else {
                elegirOpcion();
            }


         
           
}           


    


   
       
       
       
        




    

   




