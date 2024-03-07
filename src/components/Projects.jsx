import Project from "./Project.jsx"
const Projects = ({ projects }) => {
    return (
        <div className="relative bg-white p-8 lg:p-20 w-screen">
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
        </div>
    )
}

export default Projects
