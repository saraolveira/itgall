import Project from "./Project.jsx"
const Projects = ({ projects }) => {
    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-screen">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Projects
            </h2>
            <div>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        slug={project.slug}
                        nombre={project.acf.proyecto}
                        negativo={project.acf.negativo.sizes.large}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
