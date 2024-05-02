import Contact from "../components/Contact.jsx"
import PageTransition from "../components/PageTransition.jsx"

const ContactPage = () => {
    document.title = "Contact ITGALL"
    return (
        <>
            <Contact />

            <PageTransition />
        </>
    )
}

export default ContactPage
