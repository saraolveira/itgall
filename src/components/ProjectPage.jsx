import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const ProjectPage = ({ projects }) => {
    const { id } = useParams()
    const [project, setproject] = useState()

    const chooseproject = async () => {
        const projectFinal = projects.filter((project) => project.slug === id)
        setproject(projectFinal[0])
        // console.log(projectFinal[0])
    }

    useEffect(() => {
        chooseproject()
    })

    if (!project) return <div></div>

    return (
        <>
            <h2>{project.acf.proyecto}</h2>
            <PageTransition />
        </>
    )
}

export default ProjectPage
