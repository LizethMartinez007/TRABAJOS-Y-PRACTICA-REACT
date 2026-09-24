import '../styles/productos.css';

function ProductoModal({ producto, onCerrar, onAgregar }) {
    return (
        <section className="modal-visor">
            <section className="contenido-modal">
                <span className="boton-cerrar" onClick={onCerrar}>x</span>

                {/* Imagen ampliada (lado izquierdo) */}
                <article className="modal-lado-izq">
                    <img src={producto.image} id="imgModal" alt={producto.title} />
                </article>

                {/* Detalles del producto (lado derecho) */}
                <article className="modal-lado-der">
                    <h2>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <article className="precio-texto">{producto.price}</article>
                    <button className="btn-agregar-carrito" onClick={onAgregar}>Agregar</button>
                </article>
            </section>
        </section>
    );
}

export default ProductoModal;
