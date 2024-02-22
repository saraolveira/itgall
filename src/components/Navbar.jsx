import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle.jsx"
import MenuItem from "./MenuItem.jsx"
import { Link } from "react-router-dom"
const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 35px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: "circle(25px at calc(100% - 35px) 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    }
    const dark = {
        open: { opacity: 0 },
        closed: { opacity: 1 },
    }
    const light = {
        open: { opacity: 1 },
        closed: { opacity: 0, transition: { delay: 0.5 } },
    }

    return (
        <header>
            <nav className="relative z-20 h-20 p-3.5 lg:p-8 xl:p-12 flex justify-between items-center text-lila-900 text-l xl:text-xl font-bold font-body">
                <div className="flex gap-3 md:gap-4 lg:gap-6">
                    <Link to="/">
                        <motion.div
                            className="relative"
                            animate={isOpen ? "open" : "closed"}
                        >
                            <motion.img
                                src="/itgall.svg"
                                alt="Logo ITGALL"
                                className="h-16 z-40"
                                initial={false}
                                variants={dark}
                            />
                            <motion.img
                                src="/itgall-blanco.svg"
                                alt="Logo ITGALL negativo"
                                className="absolute top-0 left-0 h-16 z-40"
                                initial={false}
                                variants={light}
                            />
                        </motion.div>
                    </Link>
                </div>

                <div className="hidden lg:flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-amarillo transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-amarillo transition-colors duration-300"
                    >
                        ITGALL
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-amarillo transition-colors duration-300"
                    >
                        Network
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-amarillo transition-colors duration-300"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/"
                        className="hover:text-amarillo transition-colors duration-300"
                    >
                        News
                    </Link>
                </div>
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="lg:hidden"
                >
                    <motion.div
                        className={`top-0 right-0 w-full h-screen bg-lila-100 ${
                            isOpen ? "fixed" : "absolute"
                        }`}
                        variants={sidebar}
                    />
                    <motion.div
                        variants={variants}
                        className={`fixed top-0 right-0 w-full h-screen pt-24 pr-6 flex flex-col items-end gap-4 text-white text-3xl ${
                            isOpen
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                        }`}
                    >
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="Home"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="ITGALL"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="Network"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="Projects"
                        />
                        <MenuItem
                            toggle={() => toggleOpen()}
                            path="/"
                            text="News"
                        />
                    </motion.div>
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </nav>
        </header>
    )
    // return (
    //     <nav className="w-screen h-20 py-2 px-8 flex justify-between items-center">
    //         <div>
    //             <img src="/itgall.svg" alt="Logo ITGALL" className="w-48" />
    //         </div>
    //         <div className="flex gap-10 font-body font-extrabold text-2xl mr-8 text-lila-900">
    //             <Link
    //                 to="/"
    //                 className="hover:text-amarillo transition-colors duration-300"
    //             >
    //                 Home
    //             </Link>
    //             <Link
    //                 to="/"
    //                 className="hover:text-amarillo transition-colors duration-300"
    //             >
    //                 ITGALL
    //             </Link>
    //             <Link
    //                 to="/"
    //                 className="hover:text-amarillo transition-colors duration-300"
    //             >
    //                 Network
    //             </Link>
    //             <Link
    //                 to="/"
    //                 className="hover:text-amarillo transition-colors duration-300"
    //             >
    //                 Projects
    //             </Link>
    //             <Link
    //                 to="/"
    //                 className="hover:text-amarillo transition-colors duration-300"
    //             >
    //                 News
    //             </Link>
    //         </div>
    //     </nav>
    // )
}

export default Navbar
