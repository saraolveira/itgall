import React from "react"
import { useEffect, useState } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Network from "./pages/Network.jsx"
import ProjectsTestings from "./pages/ProjectsTestings.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import News from "./pages/News.jsx"
import TestITGALL from "./pages/TestTGALL.jsx"
import BePart from "./pages/BePart.jsx"
import SinglePost from "./components/SinglePost.jsx"
import LivingLabPage from "./components/LivingLabPage.jsx"
import ProjectPage from "./components/ProjectPage.jsx"
import TesteoPage from "./components/TesteoPage.jsx"
import ColaboradorPage from "./components/ColaboradorPage.jsx"

const App = () => {
    const [posts, setPosts] = useState([])
    const [livingLabs, setLivingLabs] = useState([])
    const [colaboradores, setColaboradores] = useState([])
    const [projects, setProjects] = useState([])
    const [testeos, setTesteos] = useState([])

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
        // console.log(livingLabs)
    }

    const fetchColaboradores = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/colaborador?acf_format=standard&per_page=100"
        )
        const responseColaboradores = await response.json()

        setColaboradores(responseColaboradores.reverse())
        // console.log(colaboradores)
    }

    const fetchProjects = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/proyecto?acf_format=standard&per_page=100"
        )
        const responseProjects = await response.json()

        setProjects(responseProjects)
        // console.log(projects)
    }

    const fetchTesteos = async () => {
        const response = await fetch(
            "https://blog.itgall.tech/wp-json/wp/v2/testeo?acf_format=standard&per_page=100"
        )
        const responseTesteos = await response.json()

        setTesteos(responseTesteos.reverse())
        // console.log(projects)
    }

    useEffect(() => {
        fetchPosts()
        fetchLivingLabs()
        fetchColaboradores()
        fetchProjects()
        fetchTesteos()
    }, [])

    const element = useRoutes([
        {
            path: "/",
            element: (
                <Home
                    posts={posts}
                    livingLabs={livingLabs}
                    colaboradores={colaboradores}
                    projects={projects}
                    testeos={testeos}
                />
            ),
        },
        {
            path: "/network",
            element: (
                <Network
                    livingLabs={livingLabs}
                    colaboradores={colaboradores}
                />
            ),
        },
        {
            path: "/projects-testings",
            element: <ProjectsTestings projects={projects} testeos={testeos} />,
        },
        {
            path: "/blog",
            element: <News posts={posts} />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
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
            element: (
                <LivingLabPage livingLabs={livingLabs} testeos={testeos} />
            ),
        },
        {
            path: "/project/:id",
            element: <ProjectPage projects={projects} />,
        },
        {
            path: "/testing/:id",
            element: <TesteoPage testeos={testeos} livingLabs={livingLabs} />,
        },
        {
            path: "/collaborators/:id",
            element: <ColaboradorPage colaboradores={colaboradores} />,
        },
    ])

    const location = useLocation()

    if (!element) return null

    return (
        <div className="font-body cursor-default overflow-hidden">
            <Navbar />

            <AnimatePresence mode="wait" initial={false}>
                {React.cloneElement(element, { key: location.pathname })}
                <ScrollToTop />
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default App
