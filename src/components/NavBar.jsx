import { Link } from 'react-router-dom';
import '../styles/index.css';

function NavBar({ carrito, onAbrirCarrito }) {
  return (
    <header className="barra_superior">
      <h4 className="barra_superior_logo">
        <Link to="/">GROW</Link>
      </h4>

      <nav className="barra_superior_contactos">
        <p><Link to="/productos">Productos</Link></p>
        <p>Acerca de nosotros</p>
        <p>Contáctanos</p>
      </nav>

      <section className="barra_superior_iconos" onClick={onAbrirCarrito}>
        <span>🛒</span>
        <span id="contador-carrito-nav">{carrito.length}</span>
      </section>
    </header>
  );
}

export default NavBar;
