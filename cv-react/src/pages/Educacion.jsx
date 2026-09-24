import perfil from "../assets/image/perfil.jpeg";
import fondo from "../assets/image/fondocontacto.jpg";
import mail from "../assets/image/mail.png";
import telefono from "../assets/image/telefono.png";
import ubicacion from "../assets/image/ubicacion.jpg";

function Contacto() {
    return (
        <section
            className="min-h-screen"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
        >
            <header className="flex flex-col justify-center w-full py-[50px] box-border">
                <article className="w-[15%] mx-auto">
                    <img src={perfil} alt="Logo" className="max-w-[80%] rounded-full mx-auto" />
                </article>
                <h1 className="text-[70px] text-azure font-[Verdana] text-center">
                    Contacto
                </h1>

                <section className="flex justify-center font-[Verdana] text-center gap-[1%]">
                    <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4">
                        <img src={mail} alt="Correo" className="w-[160px] mx-auto" />
                        <h2 className="text-antiquewhite">Correo</h2>
                    </section>

                    <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4">
                        <img src={telefono} alt="Teléfono" className="w-[160px] mx-auto" />
                        <h2 className="text-antiquewhite">Teléfono</h2>
                    </section>

                    <section className="text-aliceblue border border-white rounded-[8%] w-[31%] bg-[rgba(138,132,125,0.538)] p-4">
                        <img src={ubicacion} alt="Ubicación" className="w-[160px] mx-auto" />
                        <h2 className="text-antiquewhite">Ubicación</h2>
                    </section>
                </section>
            </header>

            <main className="px-6">
                <p className="text-antiquewhite font-[Verdana] text-[20px] text-center">
                    {/* información de contacto */}
                </p>
            </main>
        </section>
    );
}

export default Contacto;
