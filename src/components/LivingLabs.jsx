import LivingLab from "./LivingLab.jsx"
import { Link } from "react-router-dom"

const LivingLabs = ({ livingLabs }) => {
    return (
        <div className="bg-lila-400 p-8 lg:p-20 w-screen" id="livingLabs">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Living Lab Network
            </h2>

            <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-24 ">
                {livingLabs.map((livingLab) => (
                    <LivingLab
                        key={livingLab.id}
                        slug={livingLab.slug}
                        nombre={livingLab.acf.nombre}
                        logo={livingLab.acf.logo.sizes.large}
                        negativo={livingLab.acf.logo_negativo.sizes.large}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-10 p-0">
                <Link
                    to="/"
                    className="bg-amarillo hover:bg-lila-900 px-4 py-2 rounded-3xl font-bold text-base text-lila-900 lg:text-2xl hover:text-amarillo transition-all duration-300"
                >
                    Be part of the ITGALL Network
                </Link>
            </div>
        </div>
    )
}

export default LivingLabs
