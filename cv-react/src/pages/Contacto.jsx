import perfil from "../assets/image/perfil.jpeg";
import fondo from "../assets/image/fondocontacto.jpg";
import mujer from "../assets/image/mujer.png";
import mail from "../assets/image/mail.png";
import telefono from "../assets/image/telefono.png";
import github from "../assets/image/github.webp";
import ubicacion from "../assets/image/ubicacion.jpg";

function Contacto() {
  return (
    <section
      className="min-h-screen"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
    >
      <header className="text-center text-aliceblue">
        <article className="w-[15%] mx-auto">
          <img src={perfil} alt="Logo" className="max-w-[80%] rounded-full mx-auto" />
        </article>
        <h1 className="text-[3rem] text-azure font-[Verdana]">
          Contacto
        </h1>
      </header>

      <main className="flex flex-wrap justify-center items-center min-h-[76vh] font-[Verdana] text-center max-w-5xl mx-auto px-6">
        <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4 mb-4">
          <h2 className="flex items-center justify-center">
            <img src={mujer} alt="mujer logo" className="w-5 h-5 mr-[3px]" />
            Nombre:
          </h2>
          <p>Yina Lizeth Martinez Guzman</p>
        </section>

        <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4 mb-4">
          <h2 className="flex items-center justify-center">
            <img src={mail} alt="mail logo" className="w-5 h-5 mr-[3px]" />
            Email
          </h2>
          <p>yinamartinezguzman@gmail.com</p>
        </section>

        <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4 mb-4">
          <h2 className="flex items-center justify-center">
            <img src={telefono} alt="telefono logo" className="w-5 h-5 mr-[3px]" />
            Número de contacto:
          </h2>
          <p>3170649954</p>
        </section>

        <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4 mb-4">
          <h2 className="flex items-center justify-center">
            <img src={github} alt="Github logo" className="w-5 h-5 mr-[3px]" />
            Github
          </h2>
          <p>ymartinez@github.com</p>
        </section>

        <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4 mb-4">
          <h2 className="flex items-center justify-center">
            <img src={ubicacion} alt="ubicacion logo" className="w-5 h-5 mr-[3px]" />
            Residencia
          </h2>
          <p>Popayán-Colombia</p>
        </section>
      </main>
    </section>
  );
}

export default Contacto;
