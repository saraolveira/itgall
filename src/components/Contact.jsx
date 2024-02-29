const Contact = () => {
    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-screen">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Contact
            </h2>
            <div className="lg:flex lg:justify-evenly">
                <div className="flex items-center gap-2 lg:gap-4 bg-white mt-4 px-4 py-2 rounded-full">
                    <img
                        src="/gisela.jpg"
                        alt="Gisela García-Álvarez"
                        className="rounded-full w-20 lg:w-36"
                    />
                    <div>
                        <p className="font-bold text-lila-900 lg:text-2xl ">
                            Gisela García-Álvarez
                        </p>
                        <a
                            href="mailto:gerencia@clustersaude.com"
                            className="font-bold text-lila-400 text-xs lg:text-base hover:text-amarillo transition-all duration-300"
                        >
                            gerencia@clustersaude.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-4 bg-white mt-4 px-4 py-2 rounded-full">
                    <img
                        src="/nieves.jpg"
                        alt="Nieves Freire Barea"
                        className="rounded-full w-20 lg:w-36"
                    />
                    <div>
                        <p className="font-bold text-lila-900 lg:text-2xl ">
                            Nieves Freire Barea
                        </p>
                        <a
                            href="mailto:itgall@clustersaude.com"
                            className="font-bold text-lila-400 text-xs lg:text-base hover:text-amarillo transition-all duration-300"
                        >
                            itgall@clustersaude.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
