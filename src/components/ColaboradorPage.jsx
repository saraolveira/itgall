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
            </div>
            <PageTransition />
        </>
    )
}

export default ColaboradorPage
