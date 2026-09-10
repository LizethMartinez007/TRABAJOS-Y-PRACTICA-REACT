import NosotrosView from './NosotrosView.jsx';
import Contacto from './Contacto.jsx';
import Galeria from './Galeria.jsx';
import { Routes, Route } from 'react-router-dom';


export default function RoutersComponent() {
    return (
        <>

            <Routes>
                <Route path='/Nosotros' element={<NosotrosView />}></Route>
                <Route path='/Contacto' element={<Contacto />}></Route>
                <Route path='/Galeria' element={<Galeria />}></Route>
            </Routes>


        </>
    );
}