import { Link } from "react-router-dom"
const Testeo = ({ nombre, logo, slug }) => {
    return (
        <Link to={`/testing/${slug}`}>
            <div className="z-20 cursor-pointer group">
                <div className="group-hover:bg-amarillo flex justify-center items-center border-4 bg-white drop-shadow-md p-4 lg:p-6 border-lila-900 rounded-3xl w-32 lg:w-40 h-32 lg:h-40 transition-all duration-300">
                    <img src={logo} alt={nombre} className="" />
                </div>
                <p className="font-bold text-center text-lg lg:text-2xl transition-all duration-300">
                    {nombre}
                </p>
            </div>
        </Link>
    )
}

export default Testeo
