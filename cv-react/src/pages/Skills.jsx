import perfil from "../assets/image/perfil.jpeg";
import tps from "../assets/image/tps.png";
import nodejs from "../assets/image/nodejs.png";
import django from "../assets/image/django.png";
import postgresql from "../assets/image/PostgreSQL.png";
import git from "../assets/image/git.png";
import fondo from "../assets/image/fondocontacto.jpg";

function Skills() {
    return (
        <section
            className="min-h-screen"
            style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
        >
            <header className="text-center py-8">
                <article className="w-[15%] mx-auto">
                    <img src={perfil} alt="Logo" className="max-w-[80%] rounded-full mx-auto" />
                </article>
                <h1 className="text-[70px] text-azure font-[Verdana] text-center">
                    Skills
                </h1>
            </header>

            <main className="max-w-4xl mx-auto px-6 text-antiquewhite font-[Verdana]">
                <section className="border border-white bg-[rgba(93,93,93,0.77)] text-lg flex justify-between items-center px-4 py-3">
                    <div>
                        <h2 className="text-antiquewhite">Lenguajes</h2>
                        <ul className="list-disc pl-5">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <img src={tps} alt="TypeScript" className="w-[80px] h-auto object-contain" />
                </section>

                <section className="border border-white mt-[2%] bg-[rgba(93,93,93,0.77)] text-lg flex justify-between items-center px-4 py-3">
                    <div>
                        <h2 className="text-antiquewhite">Frontend</h2>
                        <ul className="list-disc pl-5">
                            <li>Node.js</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <img src={nodejs} alt="Node.js" className="w-[80px] h-auto object-contain" />
                </section>

                <section className="border border-white mt-[2%] bg-[rgba(93,93,93,0.77)] text-lg flex justify-between items-center px-4 py-3">
                    <div>
                        <h2 className="text-antiquewhite">Backend</h2>
                        <ul className="list-disc pl-5">
                            <li>Node.js</li>
                            <li>Django</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <img src={django} alt="Django" className="w-[80px] h-auto object-contain" />
                </section>

                <section className="border border-white mt-[2%] bg-[rgba(93,93,93,0.77)] text-lg flex justify-between items-center px-4 py-3">
                    <div>
                        <h2 className="text-antiquewhite">Bases de datos</h2>
                        <ul className="list-disc pl-5">
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <img src={postgresql} alt="PostgreSQL" className="w-[80px] h-auto object-contain" />
                </section>

                <section className="border border-white mt-[2%] bg-[rgba(93,93,93,0.77)] text-lg flex justify-between items-center px-4 py-3">
                    <div>
                        <h2 className="text-antiquewhite">Herramientas</h2>
                        <ul className="list-disc pl-5">
                            <li>Git</li>
                            <li>Jira</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <img src={git} alt="Git" className="w-[80px] h-auto object-contain" />
                </section>
            </main>
        </section>
    );
}

export default Skills;
