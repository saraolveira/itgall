import { Link } from "react-router-dom"
const Colaborador = ({ nombre, logo, slug }) => {
    return (
        <Link to={`/collaborators/${slug}`}>
            <div className="flex justify-center items-center bg-white hover:bg-lila-100 drop-shadow-md p-4 lg:p-6 rounded-3xl w-32 lg:w-40 h-32 lg:h-40 transition duration-300 hover:cursor-pointer group">
                <img src={logo} alt={nombre + " logo"} />
            </div>
        </Link>
    )
}

export default Colaborador
