import React from "react"
import { useEffect, useState } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import News from "./pages/News.jsx"
import TestITGALL from "./pages/TestTGALL.jsx"
import BePart from "./pages/BePart.jsx"
import SinglePost from "./components/SinglePost.jsx"
import LivingLabPage from "./components/LivingLabPage.jsx"
import ProjectPage from "./components/ProjectPage.jsx"

const App = () => {
    const [posts, setPosts] = useState([])
    const [livingLabs, setLivingLabs] = useState([])
    const [projects, setProjects] = useState([])

    const fetchPosts = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/posts"
        )
        const responsePosts = await response.json()

        setPosts(responsePosts)
        // console.log(posts)
    }

    const fetchLivingLabs = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/living-lab?acf_format=standard&per_page=100"
        )
        const responseLivingLabs = await response.json()

        setLivingLabs(responseLivingLabs.reverse())
        // responseLivingLabs.map((livingLab) => console.log(livingLab.acf))
    }

    const fetchProjects = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/proyecto?acf_format=standard&per_page=100"
        )
        const responseProjects = await response.json()

        setProjects(responseProjects)
        // console.log(projects)
    }

    useEffect(() => {
        fetchPosts()
        fetchLivingLabs()
        fetchProjects()
    }, [])

    const element = useRoutes([
        {
            path: "/",
            element: (
                <Home
                    posts={posts}
                    livingLabs={livingLabs}
                    projects={projects}
                />
            ),
        },
        {
            path: "/blog",
            element: <News posts={posts} />,
        },
        {
            path: "/test",
            element: <TestITGALL />,
        },
        {
            path: "/be-part-itgall",
            element: <BePart />,
        },
        {
            path: "/posts/:id",
            element: <SinglePost posts={posts} />,
        },
        {
            path: "/living-lab/:id",
            element: <LivingLabPage livingLabs={livingLabs} />,
        },
        {
            path: "/project/:id",
            element: <ProjectPage projects={projects} />,
        },
    ])

    const location = useLocation()

    if (!element) return null

    return (
        <div className="font-body overflow-hidden">
            <Navbar />

            <AnimatePresence mode="wait" initial={false}>
                {React.cloneElement(element, { key: location.pathname })}
                <ScrollToTop />
            </AnimatePresence>
        </div>
    )
}

export default App
