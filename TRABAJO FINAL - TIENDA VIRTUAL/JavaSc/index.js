document.addEventListener("DOMContentLoaded", () => { /* Espere s que todo el doc HTML este cargado antes de iniciar a ejecutar codigo */

  let carrito = []; /* Lista vacia en donde se guardaran los productos que el ususario vaya eligiendo */

  /*CAPTURAR ELEMENTOS DEL PRODUCTO */
  var modalProducto = document.getElementById("miModalProducto"); /*Guarda la ventana emergente donde se muestran los detalle del producto*/
  var imgModal = document.getElementById("imgModal"); /*Guarda el espacio de la imagen del producto dentro de esa ventana.*/
  var tituloModal = document.getElementById("tituloModal"); /* Guarda el lugar donde va el nombre >/título del producto */
  var descripcionModal = document.getElementById("descripcionModal"); /*Guarda la descripción del product */
  var precioModal = document.getElementById("precioModal"); /* Guarda donde se muestra cuánto cuesta el producto */
  var botonCerrarProducto = document.querySelector(".boton-cerrar"); /* Busca y guarda el botón que tiene la clase .boton-cerrar para poder cerrar la ventana emergente con las caracteristicas del producto */
  var btnAgregarAlCarrito = document.querySelector(".btn-agregar-carrito"); /* Busca y guarda el botón para añadir productos a la lista de compras*/

  /* Elementos del carrito */
  var modalCarrito = document.getElementById("miModalCarrito"); /*Guarda la ventana emergente del compras general*/
  var abrirCarritoNav = document.getElementById("abrirCarritoNav"); /* Guarda el botón que el usuario presionara para abrir y ver su carrito*/
  var botonCerrarCarrito = document.querySelector(".boton-cerrar-carrito"); /*Busca y guarda el botón  para cerrar la ventana del carrito*/
  var contenedorItemsCarrito = document.getElementById("contenedor-items-carrito"); /* guarda l"caja" vacía donde se irán listando  los productos agregados */
  var precioTotalCarrito = document.getElementById("precioTotalCarrito"); /*Guarda el  texto que mostrará la suma total de dinero a pagar*/
  var contadorCarritoNav = document.getElementById("contador_carrito"); /*Guarda el pequeño número  que dice cuántos productos hay en total dentro del carrito*/







  let productoSeleccionadoActual = null; /* guardara los datos del producto que el usuario escoja*/



  var todasLasImagenes = document.querySelectorAll(".imagen1, .imagen2, .imagen3, .imagen5"); /* Busca y guarda las imagenes de la tienda y las guarda todas en un SOLA lista*/

  todasLasImagenes.forEach(imagen => { /* Recorre la lista de imagenes para aplicar la misma regla a todas */
    imagen.addEventListener("click", (evento) => { /*Escuchador de evento que cada que el usuario haga click se ejecuta todo el código siguiente */
      var elementoClicado = evento.target; /*Identifica y guarda la imagen a la que el usuario hizo click*/


      productoSeleccionadoActual = { /*para guardar los detaller del producto*/
        titulo: elementoClicado.getAttribute("data-title"), /*extrae el nombre gusrdado en data-title*/
        precioText: elementoClicado.getAttribute("data-price"), /*muestra el precio en texto original */

        precioNum: parseFloat(elementoClicado.getAttribute("data-price").replace(/[^0-9.-]+/g, "")), /*Toma el precio de texto, le borra con una regla matemática (replace) cualquier símbolo como el "$" o letras, y lo convierte en un número decimal limpio (parseFloat) para poder hacer operaciones matemáticas más adelante. */
        imagenSrc: elementoClicado.src /*guarda el enlace directo de la imagen */
      };


      imgModal.src = productoSeleccionadoActual.imagenSrc; /*cambia la imagen del modal por el producto seleccionado */
      tituloModal.textContent = productoSeleccionadoActual.titulo; /*el nombre del producto */
      descripcionModal.textContent = elementoClicado.getAttribute("data-description"); /*la descripcion del producto */
      precioModal.textContent = productoSeleccionadoActual.precioText; /*muestras el precio */

      modalProducto.style.display = "flex"; /*busca a el "modal oculto" para que se muestre en pantalla */
    });
  });

  botonCerrarProducto.addEventListener("click", () => { /*espera a que el ususario le de click a la x para salir */
    modalProducto.style.display = "none"; /* el none hace que la pantala se oculte por completo */
  });











  btnAgregarAlCarrito.addEventListener("click", () => { /* Agregar un escuchadord eventos  */
    if (productoSeleccionadoActual) { /* Verifica que este un producto selecccionado para evitar guardar datos vacios */

      var itemCarrito = { /*Se cre el itemCarrito*/
        id: Date.now(), /*Usa la fecha y hora exacta para que se diferencie de otros articulos*/
        titulo: productoSeleccionadoActual.titulo, /*copia el nombre del producto seleccionado antes*/
        precioText: productoSeleccionadoActual.precioText, /*copia el texto del precio*/
        precioNum: productoSeleccionadoActual.precioNum, /*Vuelve a copiar el precio en formato texto para futuras operaciones matemáticas*/
        imagenSrc: productoSeleccionadoActual.imagenSrc /*Copia el enlace de la imagen del producto*/
      };


      carrito.push(itemCarrito); /*Mete el articulo (itemCarrito) en la lista (carrito) la que esta al inicio*/


      actualizarInterfazCarrito(); /*Es para que lo que esta en el carrito se actualize*/


      modalProducto.style.display = "none"; /*Cierra la ventana emergente del producto cuando el usuario le da agregar producro*/
    }
  });

  function actualizarInterfazCarrito() {
 /*Se encarga de actualizar lo que el usuario va a ver en el panel del carrito*/
    contenedorItemsCarrito.innerHTML = ""; /*Borra lo que estaba antes para colocar lo nuevo y que no de duplique dentro del carrito*/

    if (carrito.length === 0) { /*Verifica si la lista del carrito esta vacia para ejecutar lo siguiente:*/
      contenedorItemsCarrito.innerHTML = `<p style="text-align:center; color:#999; padding:20px 0;">Tu carrito está vacío</p>`; /*Si el carrito esta vacio muestra este mensaje*/
      precioTotalCarrito.textContent = "$0"; /*Reinicia el marcador del precio total a 0*/
      contadorCarritoNav.textContent = "0";/*Pone en cero el resuntado total a pagar*/
      return; /*Aqui cierra esta parte del codigo*/
    }






    var sumaTotal = 0; /*Variable para ir sumando los valores*/

    carrito.forEach(item => { /*Bucle para i revisando cada uno de los productos de la lista*/
      sumaTotal += item.precioNum; /*toma el precio del producto y lo va guardando en sumaTotal*/

      var filaHtml = document.createElement("section"); /*Uuna nueva caja */
      filaHtml.classList.add("item-carrito"); /*Crea en esa caja un codigo html, usando la imagen del producto, el titulo, el precio, y un boton de eliminar*/
      filaHtml.innerHTML = `
        <img src="${item.imagenSrc}" alt="${item.titulo}">
        <section class="item-detalles">
          <h6>${item.titulo}</h6>
          <span>${item.precioText}</span>
        </section>
        <button class="btn-eliminar-item" data-id="${item.id}">&times;</button>
      `;

      contenedorItemsCarrito.appendChild(filaHtml); /*toma la caja y la mete dentro del carrito que se muestra en la seccion del carrito*/
    });


    precioTotalCarrito.textContent = `$${sumaTotal.toFixed(3)}`; /*Muestra todo el dinero acumulado y el .toFixed determina los decimales a tener*/
    contadorCarritoNav.textContent = carrito.length; /*Cuenta los productos dentro de la lista (carrito.lengh) y va actualizando numero total*/




    var botonesEliminar = contenedorItemsCarrito.querySelectorAll(".btn-eliminar-item"); /*Busca todos los botones con la x que se muestran en oantalla y los guarda en una lista*/
    botonesEliminar.forEach(btn => { /*Recorre cada uno para dar indicaciones distintas */
      btn.addEventListener("click", (e) => { /*espera a que el usuario de click en x en alguno de los productos*/
        var idAEliminar = parseInt(e.target.getAttribute("data-id")); /*Al hacer click lee data-id y lo pasa a numero entrero para saber que producto es el que se quiere borrar*/

        carrito = carrito.filter(item => item.id !== idAEliminar); /*Indica que TODOS LOS DEMAS PRODUCTOS CON UN ID DIFERENTE al que se acaba de "seleccionar" permanezcan y solo se borre el que coincide con ese ID*/

        actualizarInterfazCarrito();   /*Se encarga de actualizar lo que el usuario va a ver en el panel del carrito*/
      });
    });
  }








  abrirCarritoNav.addEventListener("click", () => {  /*Espera a que ek usuario de click en el boton del carrito*/
    modalCarrito.style.display = "flex";  /*Cambia el estilo visual del carrito para que deje de estar oculto  y se muestre en pantalla*/
  });

  botonCerrarCarrito.addEventListener("click", () => {  /* Esper el click en ls x que esta dentro del panel del carrito */
    modalCarrito.style.display = "none";  /*al pasar a none en estilo visual el panel del carrito se oculte*/
  });

});
