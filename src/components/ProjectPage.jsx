import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const ProjectPage = ({ projects }) => {
    const { id } = useParams()
    const [project, setProject] = useState()

    const chooseProject = async () => {
        const projectFinal = projects.filter((project) => project.slug === id)
        setProject(projectFinal[0])
        console.log(projectFinal[0])
    }

    useEffect(() => {
        chooseProject()
    })

    if (!project) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <div className="lg:flex lg:justify-between lg:items-center">
                    <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                        {project.acf.proyecto}
                    </h2>
                    <img
                        src={project.acf.negativo.sizes.large}
                        alt={project.acf.proyecto}
                        className="mb-4 w-36 lg:w-72"
                    />
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl">
                        <p
                            className="text-center lg:text-justify"
                            dangerouslySetInnerHTML={{
                                __html: project.acf.descripcion,
                            }}
                        />
                        <h3 className="mt-8 mb-8 font-extrabold text-3xl text-lila-900">
                            ITGALL's role
                        </h3>
                        <p
                            className="text-center lg:text-justify"
                            dangerouslySetInnerHTML={{
                                __html: project.acf.itgall,
                            }}
                        />
                    </div>
                    <a
                        href={project.acf.web}
                        className="bg-amarillo hover:bg-lila-900 px-4 py-2 rounded-3xl font-bold text-base text-lila-900 lg:text-2xl hover:text-amarillo transition-all duration-300"
                    >
                        Visit the project's website
                    </a>
                </div>
            </div>
            <PageTransition />
        </>
    )
}

export default ProjectPage
