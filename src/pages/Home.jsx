import Hero from "../components/Hero.jsx"
import LivingLabs from "../components/LivingLabs.jsx"
import Blog from "../components/Blog.jsx"
import PageTransition from "../components/PageTransition.jsx"

const Home = ({ posts, livingLabs }) => {
    return (
        <>
            <Hero />
            <LivingLabs livingLabs={livingLabs} />
            <Blog posts={posts} />
            <PageTransition />
        </>
    )
}

export default Home
