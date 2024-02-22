import { Link } from "react-router-dom"
const LivingLab = ({ nombre, logo, negativo, slug }) => {
    return (
        <Link to={`/living-lab/${slug}`}>
            <div className="w-52 h-52 bg-white p-8 flex justify-center items-center rounded-3xl drop-shadow-md hover:cursor-pointer hover:bg-lila-100 transition duration-300 group">
                <img
                    src={logo}
                    alt={nombre + " logo"}
                    className="group-hover:hidden transition duration-300"
                />
                <img
                    src={negativo}
                    alt={nombre + " logo negativo"}
                    className="hidden opacity-0 group-hover:flex group-hover:opacity-100 transition duration-300"
                />
            </div>
        </Link>
    )
}

export default LivingLab
