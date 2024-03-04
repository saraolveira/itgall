const TeamMember = ({ img, nombre, mail, cargo }) => {
    const link = `mailto:${mail}`
    return (
        <div className="flex items-center gap-2 lg:gap-4 bg-white mt-4 px-4 py-2 rounded-full">
            <img src={img} alt={nombre} className="rounded-full w-20 lg:w-36" />
            <div>
                <p className="font-bold text-lila-900 lg:text-2xl">{nombre}</p>
                <p className="font-bold text-lila-900 text-xs lg:text-base italic">
                    {cargo}
                </p>
                <a
                    href={link}
                    className="font-bold text-lila-400 text-xs lg:text-base hover:text-amarillo italic transition-all duration-300"
                >
                    {mail}
                </a>
            </div>
        </div>
    )
}

export default TeamMember
