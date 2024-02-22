import LivingLab from "./LivingLab.jsx"

const LivingLabs = ({ livingLabs }) => {
    return (
        <div className="w-screen bg-lila-400 p-8 flex flex-wrap justify-evenly gap-8 lg:gap-20 lg:p-20">
            {livingLabs.map((livingLab) => (
                <LivingLab
                    key={livingLab.id}
                    slug={livingLab.slug}
                    nombre={livingLab.acf.nombre}
                    logo={livingLab.acf.logo.sizes.large}
                    negativo={livingLab.acf.logo_negativo.sizes.large}
                />
            ))}
        </div>
    )
}

export default LivingLabs
