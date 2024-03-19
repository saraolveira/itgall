import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition.jsx"

const TesteoPage = ({ testeos, livingLabs }) => {
    const { id } = useParams()
    const [testeo, setTesteo] = useState()
    const [livingLabsFinal, setLivingLabsFinal] = useState([])

    const chooseTesteo = async () => {
        const testeoFinal = testeos.filter((testeo) => testeo.slug === id)
        setTesteo(testeoFinal[0])
        const livingLabsTesteo = testeoFinal[0].acf.living_labs
        for (let livingLab of livingLabs) {
            if (
                livingLabsTesteo.includes(livingLab.acf.nombre) &&
                livingLabsFinal.length < livingLabs.length
            ) {
                livingLabsFinal.push(livingLab)
            }
        }
    }

    useEffect(() => {
        chooseTesteo()
    })

    if (!testeo) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                    {testeo.acf.nombre}
                </h2>
            </div>
            <PageTransition />
        </>
    )
}

export default TesteoPage
