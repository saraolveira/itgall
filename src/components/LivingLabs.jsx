import LivingLab from "./LivingLab.jsx"
import Colaborador from "./Colaborador.jsx"
import { Link } from "react-router-dom"
import Map from "./Map.jsx"

const LivingLabs = ({ livingLabs, colaboradores }) => {
    return (
        <div className="bg-lila-400 p-8 lg:p-20 w-screen" id="livingLabs">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                ITGALL Network
            </h2>
            <p className="mb-8 font-semibold text-slate-50 text-xl">
                Discover all ITGALL Living Labs and collaborators around the
                world! The ITGALL Network stimulates co-creation, design and
                collaboration among all stakeholders of the care ecosystem.
            </p>

            <Map livingLabs={livingLabs} colaboradores={colaboradores} />
            <div className="flex justify-end gap-2 lg:gap-4 bg-white p-2 rounded-b-3xl w-full h-10 font-semibold text-lila-900 text-sm italic">
                <img src="/itgall-iso-oscuro.svg" alt="" /> <p>Living Labs</p>
                <img src="/itgall-iso-claro.svg" alt="" /> <p>Collaborators</p>
            </div>
            <h2 className="mt-8 mb-8 font-extrabold text-4xl text-amarillo">
                ITGALL Living Labs
            </h2>
            <p className="mb-8 font-semibold text-slate-50 text-xl">
                Open innovation enviroments/platforms where technological
                solutions are tested and developed in real usage situations.
                This allows for collaboration between companies, institutions,
                end-users and toher interested agents to develop, validate and
                text new technologies, products and services.
            </p>
            <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-14 mt-8">
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
            <h2 className="mt-12 mb-8 font-extrabold text-4xl text-amarillo">
                ITGALL Collaborators
            </h2>
            <p className="mb-8 font-semibold text-slate-50 text-xl">
                They support different parts of the testing process like
                consulting, data processing, business intelligence (market
                analysis), etc.
            </p>
            <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-14 mt-8">
                {colaboradores.map((colaborador) => (
                    <Colaborador
                        key={colaborador.id}
                        slug={colaborador.slug}
                        nombre={colaborador.acf.nombre}
                        logo={colaborador.acf.logo.sizes.large}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-10 p-0">
                <Link
                    to="/be-part-itgall"
                    className="bg-amarillo hover:bg-lila-900 px-4 py-2 rounded-3xl font-bold text-base text-lila-900 lg:text-2xl hover:text-amarillo transition-all duration-300"
                >
                    Be part of the ITGALL Network
                </Link>
            </div>
        </div>
    )
}

export default LivingLabs
