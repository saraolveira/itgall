import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const ColaboradorPage = ({ colaboradores }) => {
    const { id } = useParams()
    const [colaborador, setColaborador] = useState()

    const chooseColaborador = async () => {
        const colaboradorFinal = colaboradores.filter(
            (colaborador) => colaborador.slug === id
        )
        setColaborador(colaboradorFinal[0])
    }

    useEffect(() => {
        chooseColaborador()
    })

    if (!colaborador) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                    {colaborador.acf.nombre}
                </h2>
                <div className="flex lg:flex-row flex-col gap-10">
                    <div className="bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl lg:w-4/5">
                        <p
                            className="text-center lg:text-justify"
                            dangerouslySetInnerHTML={{
                                __html: colaborador.acf.descripcion,
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl lg:w-1/5">
                        <img
                            src={colaborador.acf.logo.sizes.large}
                            alt={colaborador.acf.nombre}
                            className="w-32"
                        />
                        <div className="font-bold text-center">
                            <a
                                href={`mailto:${colaborador.acf.email_contacto}`}
                                className="text-amarillo hover:text-lila-900 transition-all duration-300"
                            >
                                {colaborador.acf.email_contacto}
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <h3 className="mt-8 mb-8 font-extrabold text-3xl text-amarillo">
                        News
                    </h3>
                </div> */}
            </div>
            <PageTransition />
        </>
    )
}

export default ColaboradorPage
