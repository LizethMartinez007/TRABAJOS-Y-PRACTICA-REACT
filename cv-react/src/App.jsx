import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import PerfilProfesional from "./pages/Perfilprofesional";
import Skills from "./pages/Skills";
import Educacion from "./pages/Educacion";
import Idiomas from "./pages/Idiomas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/perfil" element={<PerfilProfesional />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/idiomas" element={<Idiomas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
