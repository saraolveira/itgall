import CSG from "./CSG.jsx"
import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <div
            className="flex justify-center bg-lila-900 h-[calc(100svh-5rem)] "
            id="hero"
        >
            <img
                src="itgall-iso-claro.svg"
                className="lg:top-32 -bottom-10 lg:-left-96 lg:z-20 absolute opacity-40 w-screen lg:w-2/6 h-3/5 lg:h-5/6 animate-spin-slow"
            />
            <div className="z-10 flex flex-col justify-center items-center gap-10 bg-white mt-12 rounded-3xl w-10/12 h-4/6 lg:h-5/6">
                <div className="text-3xl text-center text-lila-900 lg:text-5xl">
                    <p className="font-extrabold">TECH FOR PEOPLE</p>
                    <p> YOUR LIVING LAB NETWORK</p>
                </div>
                <Link
                    to="/"
                    className="bg-lila-900 hover:bg-amarillo px-4 py-2 rounded-3xl font-2xl font-bold text-2xl text-amarillo hover:text-lila-900 transition-all duration-300"
                >
                    Test in ITGALL
                </Link>
            </div>
            <CSG />
        </div>
    )
}

export default Hero
