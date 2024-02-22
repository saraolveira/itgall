const Hero = () => {
    return (
        <div className="h-screen bg-lila-900 flex justify-center " id="hero">
            <img
                src="itgall-iso-claro.svg"
                className="h-4/5 opacity-40 absolute -bottom-48 lg:-left-96 lg:top-32 animate-spin-slow z-10"
            />
            <div className="bg-white w-10/12 h-4/6 lg:h-5/6 mt-12 rounded-3xl flex justify-center items-center">
                <div className="text-center text-3xl lg:text-5xl text-lila-900">
                    <p className="font-extrabold">TECH FOR PEOPLE</p>
                    <p> YOUR LIVING LAB NETWORK</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
