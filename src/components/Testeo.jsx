const Testeo = ({ nombre, logo }) => {
    return (
        <div className="cursor-pointer group">
            <div className="group-hover:bg-amarillo flex justify-center items-center border-4 bg-white drop-shadow-md p-4 lg:p-6 border-lila-900 rounded-3xl w-32 lg:w-40 h-32 lg:h-40 transition-all duration-300">
                <img src={logo} alt={nombre} className="" />
            </div>
            <p className="font-bold text-center text-lg text-lila-900 lg:text-2xl transition-all duration-300">
                {nombre}
            </p>
        </div>
    )
}

export default Testeo
