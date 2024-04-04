import TeamMember from "./TeamMember.jsx"
const Contact = () => {
    return (
        <div className="relative bg-lila-900 p-8 lg:p-20 w-screen min-h-[calc(100svh-5rem)]">
            <img
                src="itgall-iso-oscuro.svg"
                className="top-40 -left-52 absolute opacity-40 w-screen lg:w-2/6 h-full animate-spin-slow"
            />
            <h2 className="relative z-20 mb-8 font-extrabold text-5xl text-amarillo">
                Contact
            </h2>
            <div className="relative z-20 lg:flex lg:flex-wrap lg:justify-evenly">
                <TeamMember
                    img="gisela.jpg"
                    nombre="Gisela García-Álvarez"
                    mail="gerencia@clustersaude.com"
                    cargo="Managing Director"
                />
                <TeamMember
                    img="nieves.jpg"
                    nombre="Nieves Freire Barea"
                    mail="itgall@clustersaude.com"
                    cargo="ITGALL Coordination Assistant"
                />
                <TeamMember
                    img="sara.png"
                    nombre="Sara Olveira Martínez"
                    mail="comunicacion@clustersaude.com"
                    cargo="Fullstack Developer"
                />
                <TeamMember
                    img="lore.jpg"
                    nombre="Lorena Iglesias Andrade"
                    mail="business@clustersaude.com"
                    cargo="Business Developer"
                />
                <TeamMember
                    img="angeles.png"
                    nombre="Ángeles Lobato Limeres"
                    mail="admin@clustersaude.com"
                    cargo="Administration"
                />
            </div>
        </div>
    )
}

export default Contact
