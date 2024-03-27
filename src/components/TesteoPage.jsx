import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition.jsx"
import LivingLab from "./LivingLab.jsx"

const TesteoPage = ({ testeos, livingLabs }) => {
    const { id } = useParams()
    const [testeo, setTesteo] = useState()
    const [livingLabsFinal, setLivingLabsFinal] = useState([])
    const [testeosShow, setTesteosShow] = useState(false)

    const chooseTesteo = async () => {
        const testeoFinal = testeos.filter((testeo) => testeo.slug === id)
        setTesteo(testeoFinal[0])
    }

    const chooseLivingLabs = async () => {
        const livingLabsTesteo = testeo.acf.living_labs
        for (let livingLab of livingLabs) {
            if (
                livingLabsTesteo.includes(livingLab.acf.nombre) &&
                livingLabsFinal.includes(livingLab) === false
            ) {
                livingLabsFinal.push(livingLab)
                setTesteosShow(true)
            }
        }
    }

    useEffect(() => {
        chooseTesteo()
    })

    useEffect(() => {
        chooseLivingLabs()
    }, [testeo])

    if (!testeo) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                    {testeo.acf.nombre}
                </h2>
                <div className="bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl">
                    <p className="text-center lg:text-justify">
                        {testeo.acf.description}
                    </p>
                    <h3 className="mt-8 mb-8 font-extrabold text-3xl text-lila-900">
                        Testing objectives
                    </h3>
                    <p
                        className="text-center lg:text-justify"
                        dangerouslySetInnerHTML={{
                            __html: testeo.acf.objectives,
                        }}
                    />
                </div>
                <h3 className="mt-8 mb-8 font-extrabold text-3xl text-amarillo">
                    Living Labs where it was tested
                </h3>
                {testeosShow && (
                    <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-14 mt-8 pb-20 lg:pb-0 text-white">
                        {livingLabsFinal.map((livingLab) => (
                            <LivingLab
                                key={livingLab.id}
                                slug={livingLab.slug}
                                nombre={livingLab.acf.nombre}
                                logo={livingLab.acf.logo.sizes.large}
                                negativo={
                                    livingLab.acf.logo_negativo.sizes.large
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
            <PageTransition />
        </>
    )
}

export default TesteoPage
