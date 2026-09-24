import { Link } from 'react-router-dom';
import fondoP from '../assets/image/fondoP.jpg';
import '../styles/index.css';

function Home() {
  return (
    <main className="cuerpo_tienda">
      <img src={fondoP} alt="fondo_principal" />

      <h1 className="cuerpo_tienda_titulo">
        Cultiva tu<br />Resplandor y revela<br />tu Belleza
      </h1>

      <section className="cuerpo_tienda_contenido">
        <p className="cuerpo_tienda_contenido_descripcion">
          El camino hacia una piel sana comienza con los hábitos correctos.
          Te ofrecemos una selección exclusiva de productos dermatológicos
          diseñados para limpiar, hidratar y proteger tu rostro en cada etapa
          de tu vida. Dale a tu piel el cuidado científico que necesita y luce
          un cutis radiante, equilibrado y lleno de vitalidad todos los días.
        </p>
      </section>

      <section className="cuerpo_tienda_contenido_botones">
        <Link to="/productos">
          <button className="boton_negro">Da inicio a tu glow-up</button>
        </Link>
        <button className="boton_blanco">Leer más</button>
      </section>
    </main>
  );
}

export default Home;
