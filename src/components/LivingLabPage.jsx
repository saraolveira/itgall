import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const LivingLabPage = ({ livingLabs }) => {
    const { id } = useParams()
    const [livingLab, setLivingLab] = useState()

    const chooseLivingLab = async () => {
        const livingLabFinal = livingLabs.filter(
            (livingLab) => livingLab.slug === id
        )
        setLivingLab(livingLabFinal[0])
        console.log(livingLabFinal[0])
    }

    useEffect(() => {
        chooseLivingLab()
    })

    if (!livingLab) return <div></div>

    return (
        <>
            <h2>{livingLab.acf.nombre}</h2>
            <PageTransition />
        </>
    )
}

export default LivingLabPage
