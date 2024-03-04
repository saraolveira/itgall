import { Link } from "react-router-dom"
const Project = ({ nombre, negativo, slug, fecha, programa }) => {
    return (
        <Link to={`/project/${slug}`}>
            <div className="flex justify-between items-center border-2 border-amarillo bg-lila-900 hover:bg-amarillo drop-shadow-md mb-6 px-4 py-2 rounded-full w-full transition-all duration-300 cursor-pointer group">
                <p className="group-hover:text-lila-900 font-bold text-2xl text-white transition-all duration-300">
                    {nombre}
                </p>
                <div className="group-hover:text-lila-900 text-right text-white transition-all duration-300">
                    <p>{programa}</p>
                    <p> {fecha}</p>
                </div>
            </div>
        </Link>
    )
}

export default Project
