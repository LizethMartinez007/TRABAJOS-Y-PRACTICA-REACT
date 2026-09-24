import '../styles/productos.css';

function TarjetaProducto({ product, onClick }) {
  return (
    <article className="col">
      <article className="card">
        <img
          src={product.image}
          className="imagen1"
          alt={product.title}
          onClick={onClick}
        />
        <section className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text"></p>
        </section>
      </article>
    </article>
  );
}

export default TarjetaProducto;
