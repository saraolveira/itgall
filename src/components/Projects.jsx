import Project from "./Project.jsx"
import Testeo from "./Testeo.jsx"
const Projects = ({ projects, testeos }) => {
    return (
        <div
            className="relative bg-white p-8 lg:p-20 w-screen min-h-[calc(100svh-5rem)]"
            id="projects"
        >
            <img
                src="itgall-iso-claro.svg"
                className="top-0 -right-52 absolute opacity-40 w-screen lg:w-2/6 h-full animate-spin-slow"
            />
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Collaborative projects
            </h2>
            <div>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        slug={project.slug}
                        nombre={project.acf.proyecto}
                        negativo={project.acf.negativo.sizes.large}
                        fecha={project.acf.fecha}
                        programa={project.acf.programa}
                    />
                ))}
            </div>

            <h2 className="mt-20 mb-8 font-extrabold text-5xl text-amarillo">
                ITGALL testings
            </h2>
            <div className="flex flex-wrap justify-between gap-8 lg:gap-14 lg:grid lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 lg:auto-cols-max mt-8 pb-20 lg:pb-32 text-lila-900">
                {testeos.map((testeo) => (
                    <Testeo
                        key={testeo.id}
                        slug={testeo.slug}
                        nombre={testeo.acf.nombre}
                        logo={testeo.acf.logo.sizes.large}
                    />
                ))}
            </div>
            <img
                src="/recurso-4.png"
                className="-right-10 lg:right-10 bottom-0 z-10 absolute w-48 lg:w-96 pointer-events-none"
            />
            <img
                src="/recurso-5.png"
                className="right-56 lg:right-72 bottom-0 z-10 absolute w-48 lg:w-96 pointer-events-none"
            />
        </div>
    )
}

export default Projects
