import { Link } from "react-router-dom"
const Project = ({ nombre, negativo, slug }) => {
    return (
        <Link to={`/project/${slug}`}>
            <div className="border-2 border-amarillo bg-lila-900 hover:bg-amarillo drop-shadow-md mb-6 px-4 py-2 rounded-full w-full transition-all duration-300 cursor-pointer group">
                <p className="group-hover:text-lila-900 font-bold text-2xl text-white transition-all duration-300">
                    {nombre}
                </p>
            </div>
        </Link>
    )
}

export default Project
