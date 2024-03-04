import { Link } from "react-router-dom"
const LivingLab = ({ nombre, logo, negativo, slug }) => {
    return (
        <Link to={`/living-lab/${slug}`}>
            <div className="flex justify-center items-center bg-white hover:bg-lila-100 drop-shadow-md p-4 lg:p-6 rounded-3xl w-32 lg:w-40 h-32 lg:h-40 transition duration-300 hover:cursor-pointer group">
                <img
                    src={logo}
                    alt={nombre + " logo"}
                    className="group-hover:hidden transition duration-300"
                />
                <img
                    src={negativo}
                    alt={nombre + " logo negativo"}
                    className="group-hover:flex hidden opacity-0 group-hover:opacity-100 transition duration-300"
                />
            </div>
        </Link>
    )
}

export default LivingLab
