import LivingLab from "./LivingLab.jsx"

const LivingLabs = ({ livingLabs }) => {
    return (
        <div className="w-screen bg-lila-400 p-8  lg:p-20" id="livingLabs">
            <h2 className="text-5xl font-extrabold text-amarillo mb-8">
                Living Lab Network
            </h2>

            <div className="flex flex-wrap justify-evenly gap-8 lg:gap-20 ">
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
        </div>
    )
}

export default LivingLabs
