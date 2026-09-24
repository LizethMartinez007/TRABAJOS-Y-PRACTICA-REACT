import '../styles/productos.css';

function CarritoModal({ carrito, total, onCerrar, onEliminar }) {
  return (
    <section className="modal-visor">
      <div className="contenido-modal-carrito">
        <span className="boton-cerrar-carrito" onClick={onCerrar}>×</span>
        <h2>Tu Carrito</h2>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <section className="contenedor-items-carrito">
            {carrito.map((item) => (
              <article className="item-carrito" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-detalles">
                  <h6>{item.title}</h6>
                  <span>${item.price.toLocaleString('es-CO')}</span>
                </div>
                <button
                  className="btn-eliminar-item"
                  onClick={() => onEliminar(item.id)}
                >
                  x
                </button>
              </article>
            ))}
          </section>
        )}

        <footer className="carrito-pie">
          <div className="total-contenedor">
            <span>Total:</span>
            <span id="precioTotalCarrito">${total.toLocaleString('es-CO')}</span>
          </div>
          <button className="btn-proceder-pago">Proceder al pago</button>
        </footer>
      </div>
    </section>
  );
}

export default CarritoModal;
