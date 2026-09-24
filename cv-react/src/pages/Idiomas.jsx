import perfil from "../assets/image/perfil.jpeg";
import español from "../assets/image/español.webp";
import italiano from "../assets/image/italiano.webp";
import ingles from "../assets/image/ingles.png";
import fondo from "../assets/image/fondocontacto.jpg";

function Idiomas() {
    return (
        <section
            className="min-h-screen"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
        >
            <header className="text-center py-8">
                <article className="w-[15%] mx-auto">
                    <img src={perfil} alt="Logo" className="max-w-[80%] rounded-full mx-auto" />
                </article>
                <h1 className="text-[4rem] text-azure font-[Verdana] text-center">
                    Idiomas
                </h1>
            </header>

            <main className="max-w-4xl mx-auto px-6">
                <section className="border border-white inline-block mb-[4%] bg-[rgba(68,66,66,0.658)] p-4">
                    <article className="flex items-center font-[Verdana]">
                        <h2 className="text-aliceblue m-0 inline font-[Verdana] text-2xl">
                            Español | Nativo
                        </h2>
                        <img src={español} alt="Español" className="h-[18px] ml-2.5 object-contain" />
                    </article>
                    <p className="text-aliceblue mt-[5px] leading-[1.4] font-[Verdana] text-[20px] text-justify">
                        Dominio completo del idioma, con excelentes habilidades de comunicación
                        oral y escrita, redacción técnica y ortografía profesional.
                    </p>
                </section>

                <section className="border border-white inline-block mb-[4%] ml-[16%] bg-[rgba(68,66,66,0.658)] p-4">
                    <article className="flex items-center font-[Verdana] text-antiquewhite">
                        <h2 className="text-aliceblue m-0 inline font-[Verdana] text-2xl">
                            Italiano | B2-Técnico
                        </h2>
                        <img src={italiano} alt="Italiano" className="h-[18px] ml-2.5 object-contain" />
                    </article>
                    <p className="text-aliceblue mt-[5px] leading-[1.4] font-[Verdana] text-[20px] text-justify">
                        Aptitud para el análisis de textos especializados, comunicación efectiva
                        en reuniones de trabajo y redacción de documentos técnicos propios del sector.
                    </p>
                </section>

                <section className="border border-white inline-block mb-[4%] ml-[6%] bg-[rgba(68,66,66,0.658)] p-4">
                    <article className="flex items-center font-[Verdana] text-antiquewhite">
                        <h2 className="text-aliceblue m-0 inline font-[Verdana] text-2xl">
                            Inglés | B2-Técnico
                        </h2>
                        <img src={ingles} alt="Inglés" className="h-[18px] ml-2.5 object-contain" />
                    </article>
                    <p className="text-aliceblue mt-[5px] leading-[1.4] font-[Verdana] text-[20px] text-justify">
                        Capacidad para comprender documentación especializada, participar en
                        reuniones y en dailies, redactar reportes técnicos y comunicación efectiva
                        en entornos de trabajo internacionales.
                    </p>
                </section>
            </main>
        </section>
    );
}

export default Idiomas;
