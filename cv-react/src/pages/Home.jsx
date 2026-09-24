import Fondo1 from "../assets/image/Fondo1.jpg";

function Home() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo1})` }}
    >
      <header>
        <h1 className="text-5xl text-white font-[Verdana] mb-8">
          Yina Martinez
        </h1>
      </header>

      <main className="flex flex-col gap-3">
        <h2 className="hover:bg-[azure] px-4 py-1">
          <a href="/contacto" target="_blank" className="text-white text-xl">Contacto</a>
        </h2>
        <h2 className="hover:bg-[azure] px-4 py-1">
          <a href="/perfil" target="_blank" className="text-white text-xl">Perfil profesional</a>
        </h2>
        <h2 className="hover:bg-[azure] px-4 py-1">
          <a href="/skills" target="_blank" className="text-white text-xl">Skills</a>
        </h2>
        <h2 className="hover:bg-[azure] px-4 py-1">
          <a href="/educacion" target="_blank" className="text-white text-xl">Educación</a>
        </h2>
        <h2 className="hover:bg-[azure] px-4 py-1">
          <a href="/idiomas" target="_blank" className="text-white text-xl">Idiomas</a>
        </h2>
      </main>
    </section>
  );
}

export default Home;
