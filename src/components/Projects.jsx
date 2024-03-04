import Project from "./Project.jsx"
const Projects = ({ projects }) => {
    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-screen">
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
