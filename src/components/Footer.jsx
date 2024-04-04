import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="flex justify-center items-center gap-4 md:gap-20 bg-amarillo p-3.5 lg:p-8 xl:p-12 w-full h-32 font-bold text-center text-xs md:text-base">
            <div className="flex flex-col justify-center items-center gap-2">
                <img
                    src="/itgall-color-lila.svg"
                    alt="ITGALL"
                    className="w-32 md:w-40"
                />
                <a
                    href="mailto:itgall@clustersaude.com"
                    className="text-lila-400 hover:text-lila-900 transition-all duration-300"
                >
                    itgall@clustersaude.com
                </a>
            </div>
            <div className="bg-lila-400 w-1 h-28" />
            <div>
                <p>
                    <Link className="text-lila-400 hover:text-lila-900 transition-all duration-300">
                        Privacy and cookie policies
                    </Link>
                </p>
                <p>
                    <Link className="text-lila-400 hover:text-lila-900 transition-all duration-300">
                        Legal notices
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Footer
