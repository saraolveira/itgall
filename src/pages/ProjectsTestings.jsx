import Projects from "../components/Projects"
import PageTransition from "../components/PageTransition"

const ProjectsTestings = ({ projects, testeos }) => {
    document.title = "Projects & Testings - ITGALL"
    return (
        <>
            <Projects projects={projects} testeos={testeos} />

            <PageTransition />
        </>
    )
}

export default ProjectsTestings
