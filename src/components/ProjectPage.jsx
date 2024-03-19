import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const ProjectPage = ({ projects }) => {
    const { id } = useParams()
    const [project, setProject] = useState()

    const chooseProject = async () => {
        const projectFinal = projects.filter((project) => project.slug === id)
        setProject(projectFinal[0])
        // console.log(projectFinal[0])
    }

    useEffect(() => {
        chooseProject()
    })

    if (!project) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                    {project.acf.proyecto}
                </h2>
            </div>
            <PageTransition />
        </>
    )
}

export default ProjectPage
