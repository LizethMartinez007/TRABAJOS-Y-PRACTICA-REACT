import { Link } from 'react-router-dom';

export default function NavComponent() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/Nosotros'>Nosotros</Link></li>
                    <li><Link to='/Contacto'>Contacto</Link></li>
                    <li><Link to='/Galeria'>Galeria</Link></li>
                </ul>
            </nav>
        </>
    )
}