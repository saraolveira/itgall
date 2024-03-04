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
            <div className="relative z-10 flex flex-col justify-center items-center gap-4 lg:gap-10 bg-white mt-12 rounded-3xl w-10/12 h-4/6 lg:h-5/6">
                <img
                    src="fondo.jpg"
                    className="top-0 left-0 z-10 absolute opacity-50 blur-sm rounded-3xl w-full h-full object-cover"
                />
                <div className="z-20 text-2xl text-center text-lila-900 lg:text-5xl ">
                    <p className="font-extrabold">TECH FOR PEOPLE</p>
                    <p> YOUR LIVING LAB NETWORK</p>
                </div>
                <div className="z-20 flex justify-center text-center lg:text-xl ">
                    <p className="lg:w-3/4 font-semibold">
                        ITGALL is a Living lab network managed by CSG spread
                        along all the Galicia geography, combining capabilities
                        for testing solutions within the healthcare, social care
                        and onehealth sectors
                    </p>
                </div>

                <Link
                    to="/test"
                    className="z-20 bg-lila-900 hover:bg-amarillo px-4 py-2 rounded-3xl font-2xl font-bold text-2xl text-amarillo hover:text-lila-900 transition-all duration-300"
                >
                    Test with ITGALL
                </Link>
            </div>
            <CSG />
        </div>
    )
}

export default Hero
