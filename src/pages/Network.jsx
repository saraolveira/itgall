import LivingLabs from "../components/LivingLabs"
import PageTransition from "../components/PageTransition"

const Network = ({ livingLabs, colaboradores }) => {
    return (
        <>
            <LivingLabs livingLabs={livingLabs} colaboradores={colaboradores} />
            <PageTransition />
        </>
    )
}

export default Network
