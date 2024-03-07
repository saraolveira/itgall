import Hero from "../components/Hero.jsx"
import LivingLabs from "../components/LivingLabs.jsx"
import Projects from "../components/Projects.jsx"
import Blog from "../components/Blog.jsx"
import Contact from "../components/Contact.jsx"
import PageTransition from "../components/PageTransition.jsx"
import Gradient from "../components/Gradient.jsx"

const Home = ({ posts, livingLabs, projects, colaboradores }) => {
    return (
        <>
            <Hero />
            <Gradient direction={"bottom"} />
            <LivingLabs livingLabs={livingLabs} colaboradores={colaboradores} />
            {/* <Gradient direction={"top"} /> */}
            <Projects projects={projects} />
            {/* <Gradient direction={"bottom"} /> */}
            <Blog posts={posts} />
            <Gradient direction={"top"} />
            <Contact />
            <PageTransition />
        </>
    )
}

export default Home
