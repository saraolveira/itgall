import Hero from "../components/Hero.jsx"
import LivingLabs from "../components/LivingLabs.jsx"
import Blog from "../components/Blog.jsx"
import PageTransition from "../components/PageTransition.jsx"
import Gradient from "../components/Gradient.jsx"

const Home = ({ posts, livingLabs }) => {
    return (
        <>
            <Hero />
            <Gradient direction={"bottom"} />
            <LivingLabs livingLabs={livingLabs} />
            <Gradient direction={"top"} />
            <Blog posts={posts} />
            <PageTransition />
        </>
    )
}

export default Home
