import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import './styles/index.css';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [modalCarritoAbierto, setModalCarritoAbierto] = useState(false);

  const abrirCarrito = () => setModalCarritoAbierto(true);
  const cerrarCarrito = () => setModalCarritoAbierto(false);

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const total = carrito.reduce((suma, item) => suma + item.priceNum, 0);

  return (
    <BrowserRouter>
      <NavBar carrito={carrito} onAbrirCarrito={abrirCarrito} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={
            <Productos
              carrito={carrito}
              setCarrito={setCarrito}
              modalCarritoAbierto={modalCarritoAbierto}
              onCerrarCarrito={cerrarCarrito}
              onEliminar={eliminarDelCarrito}
              total={total}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
