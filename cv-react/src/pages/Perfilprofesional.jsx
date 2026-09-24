import javascript from "../assets/image/javascript.png";
import python from "../assets/image/python.png";
import java from "../assets/image/java.png";
import tps from "../assets/image/tps.png";
import fondo from "../assets/image/fondocontacto.jpg";

function PerfilProfesional() {
    return (
        <section
            className="min-h-screen flex flex-col"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
        >
            <header>
                <h1 className="text-[3rem] text-azure font-[Verdana] text-center py-8">
                    Perfil Profesional
                </h1>
            </header>

            <main className="flex-1">
                <p className="text-aliceblue max-w-[600px] mx-auto text-justify p-2.5 bg-[rgb(92,92,92)] rounded-[15px] font-[Inter,sans-serif] leading-relaxed">
                    Analista y desarrollador de Software con una sólida formación en el{" "}
                    <strong>ciclo de vida de desarrollo,</strong> desde el levantamiento de
                    requerimientos hasta el despliegue y mantenimiento. Apasionada por el
                    desarrollo Backend y Frontend. Especialista en la creación de soluciones
                    escalables utilizando lenguajes como <strong>Java, Python o JavaScript</strong>{" "}
                    y gestión de bases de datos <strong>SQL/NoSQL</strong>.
                    <br />
                    <br />
                    Con capacidad para trabajar bajo metodologías ágiles <strong>Scrum</strong> y un
                    enfoque constante en la optimización de procesos y la experiencia del usuario. Me
                    destaco por mi pensamiento analítico, facilidad para el aprendizaje autónomo de
                    nuevas tecnologías y compromiso con la entrega de código limpio y eficiente.
                </p>
            </main>

            <footer className="text-aliceblue flex justify-center items-center mt-[2%] font-[Verdana]">
                <section className="flex flex-col items-center text-center mr-5">
                    <img src={javascript} alt="JavaScript" className="w-[30px]" />
                    <h3>JavaScript</h3>
                </section>

                <section className="flex flex-col items-center text-center mr-5">
                    <img src={python} alt="Python" className="w-[30px]" />
                    <h3>Python</h3>
                </section>

                <section className="flex flex-col items-center text-center mr-5">
                    <img src={java} alt="Java" className="w-[30px]" />
                    <h3>Java</h3>
                </section>

                <section className="flex flex-col items-center text-center mr-5">
                    <img src={tps} alt="TypeScript" className="w-[30px]" />
                    <h3>TypeScript</h3>
                </section>
            </footer>
        </section>
    );
}

export default PerfilProfesional;
