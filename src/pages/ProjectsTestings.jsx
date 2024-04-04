import Projects from "../components/Projects"
import PageTransition from "../components/PageTransition"

const ProjectsTestings = ({ projects, testeos }) => {
    return (
        <>
            <Projects projects={projects} testeos={testeos} />

            <PageTransition />
        </>
    )
}

export default ProjectsTestings
