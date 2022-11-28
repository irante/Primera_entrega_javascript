
let opcion =0;


let precioBanghoGm220t  = 74999;
let precioBanghoCambridgeA220 = 125999;
let precioGigabyteG24f = 84999;
let valorCarrito = 0;
let comprasConfirmadas = 0;
let agregarProducto = 0;
let cantidad = 0;
let confirmar = 0;

 function elegirOpcion (){
    opcion = parseInt(prompt ("Valor del Carrito: $" + valorCarrito + "\n" + "Articulos Confirmados: " + comprasConfirmadas + "\n" +  "Agregar al carrito: presione el numero para seleccionar el producto\n \n 1 - Pc Bangho Gm220t\n 2 - Pc Bangho Cambridgr A220\n 3- Monitor Gigabyte G24\n 4 - para salir"));

 }


elegirOpcion();
while (opcion != 4){
    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt("El valor de Pc Bangho Gm220t es de $ " + precioBanghoGm220t + "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
            confirmar = prompt ("El valor total de este item es: $ " + precioBanghoGm220t* cantidad + "\n" + "Ingrese si para confirmar, no para salir");

            if(confirmar =="si"){
                valorCarrito = valorCarrito + (precioBanghoGm220t * cantidad);
                comprasConfirmadas++;
                
            }
                
            break;

            //*************************************************************************************** 

        case 2:
            cantidad = parseInt(prompt("El valor de Pc Bangho Cambridge A220 es de $ " + precioBanghoCambridgeA220 + "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
            confirmar = prompt ("El valor total de este item es: $ " + precioBanghoCambridgeA220 * cantidad + "\n" + "Ingrese si para confirmar, no para salir");

            if(confirmar =="si"){
                valorCarrito = valorCarrito + (precioBanghoCambridgeA220 * cantidad);
                comprasConfirmadas++;
                
            }
                
            break;
            
            //************************************************************************************* *
        case 3:
            cantidad = parseInt(prompt("El valor de Monitor Gigabyte G24f es de $ " + precioGigabyteG24f + "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
               
            confirmar = prompt ("El valor total de este item es: $ " + precioGigabyteG24f * cantidad + "\n" + "Ingrese si para confirmar, no para salir");
    
            if(confirmar =="si"){
                valorCarrito = valorCarrito + (precioGigabyteG24f * cantidad);
                comprasConfirmadas++;
                    
                }
                    
            break;   



            default:
                alert("Opcion incorrecta !");
                break;


    }



    if (comprasConfirmadas >=2){
        alert("Listo! Se Agrego tu segundo producto.\n" + "Recorda que Podes comprar hasta dos producto en un mismo Carrito!\n\n" + "Gracias por tu Compra, El valor Total de la misma es: $" + valorCarrito);    // si las compras son dos finaliza el bucle
        break;

    } else if(comprasConfirmadas > 0 && comprasConfirmadas < 2){                                        // si hay compras confirmadas
                 agregarProducto = prompt ("Desea Agregar otro producto al Carrito? si / no");         // pregunta si quiere realizar otra compra
                if (agregarProducto =="no") {
                    alert ("El valor Total de su compra es de $ " + valorCarrito);                      // si no quiere seguir comprando termina el bucle
                    break;
                }else{
                    elegirOpcion()
                }
               
            }else {
                elegirOpcion(); // si hay cero compras confirmadas.
            }   
               
               
               
      
                 
         
         
           
}           


    


   
       
       
       
        




    

   




