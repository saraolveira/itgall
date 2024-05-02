import LivingLabs from "../components/LivingLabs"
import PageTransition from "../components/PageTransition"

const Network = ({ livingLabs, colaboradores }) => {
    document.title = "ITGALL Network"
    return (
        <>
            <LivingLabs livingLabs={livingLabs} colaboradores={colaboradores} />
            <PageTransition />
        </>
    )
}

export default Network
