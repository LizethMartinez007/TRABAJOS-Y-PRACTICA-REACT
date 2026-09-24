import { useState, useEffect } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import ProductoModal from '../components/ProductoModal';
import CarritoModal from '../components/CarritoModal';
import { limpiadores, tonicos, serums, protectores } from '../data/Productos';
import fondo2 from '../assets/image/Fondo2.png';
import '../styles/productos.css';

function Productos({
    carrito,
    setCarrito,
    modalCarritoAbierto,
    onCerrarCarrito,
    onEliminar,
    total
}) {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [modalProductoAbierto, setModalProductoAbierto] = useState(false);

    // 👇 ESTO ES LO NUEVO: cierra el modal del producto cuando se abre el carrito
    useEffect(() => {
        if (modalCarritoAbierto) {
            setModalProductoAbierto(false);
        }
    }, [modalCarritoAbierto]);

    const abrirModalProducto = (producto) => {
        setProductoSeleccionado(producto);
        setModalProductoAbierto(true);
    };

    const agregarAlCarrito = () => {
        if (productoSeleccionado) {
            setCarrito([...carrito, { ...productoSeleccionado, id: Date.now() }]);
            setModalProductoAbierto(false);
        }
    };

    return (
        <>
            {/* Banner superior */}
            <main className="banner_tienda">
                <img src={fondo2} alt="Selected Headphone Banner" className="imagen_banner" />
            </main>

            <main>
                <h1>LIMPIADORES</h1>
                <section className="row row-cols-1 row-cols-md-4 g-4 limpiadores">
                    {limpiadores.map((p) => (
                        <TarjetaProducto key={p.title} product={p} onClick={() => abrirModalProducto(p)} />
                    ))}
                </section>

                <h1>TÓNICOS Y BRUMAS</h1>
                <section className="row row-cols-1 row-cols-md-4 g-4 tonicos_brumas">
                    {tonicos.map((p) => (
                        <TarjetaProducto key={p.title} product={p} onClick={() => abrirModalProducto(p)} />
                    ))}
                </section>

                <h1>SERÚMS Y TRATAMIENTOS</h1>
                <section className="row row-cols-1 row-cols-md-4 g-4 serums_tratamientos">
                    {serums.map((p) => (
                        <TarjetaProducto key={p.title} product={p} onClick={() => abrirModalProducto(p)} />
                    ))}
                </section>

                <h1>PROTECTORES SOLARES</h1>
                <section className="row row-cols-1 row-cols-md-4 g-4 protectores_solares">
                    {protectores.map((p) => (
                        <TarjetaProducto key={p.title} product={p} onClick={() => abrirModalProducto(p)} />
                    ))}
                </section>
            </main>

            {/* Modal del producto */}
            {modalProductoAbierto && productoSeleccionado && (
                <ProductoModal
                    producto={productoSeleccionado}
                    onCerrar={() => setModalProductoAbierto(false)}
                    onAgregar={agregarAlCarrito}
                />
            )}

            {/* Modal del carrito */}
            {modalCarritoAbierto && (
                <CarritoModal
                    carrito={carrito}
                    total={total}
                    onCerrar={onCerrarCarrito}
                    onEliminar={onEliminar}
                />
            )}
        </>
    );
}

export default Productos;
