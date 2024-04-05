import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition.jsx"
import { Icon, divIcon } from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import Testeo from "./Testeo.jsx"

const LivingLabPage = ({ livingLabs, testeos }) => {
    const { id } = useParams()
    const [livingLab, setLivingLab] = useState()
    const [testeosFinal, setTesteosFinal] = useState([])
    const [testeosShow, setTesteosShow] = useState(false)

    const livingLabIcon = new Icon({
        iconUrl: "/itgall-iso-oscuro.svg",
        iconSize: [38, 38],
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-number"><div>${cluster.getChildCount()}</div></div>`,
            iconSize: [38, 38],
        })
    }

    const chooseLivingLab = async () => {
        const livingLabFinal = livingLabs.filter(
            (livingLab) => livingLab.slug === id
        )
        setLivingLab(livingLabFinal[0])
    }

    const chooseTesteo = async () => {
        const testeosLL = livingLab.acf.testeos
        for (let testeo of testeos) {
            if (
                testeosLL.includes(testeo.acf.nombre) &&
                testeosFinal.includes(testeo) === false
            ) {
                testeosFinal.push(testeo)
                setTesteosShow(true)
            }
        }
    }

    useEffect(() => {
        chooseLivingLab()
    })

    useEffect(() => {
        chooseTesteo()
    }, [livingLab])

    if (!livingLab) return <div></div>

    return (
        <>
            <div className="bg-lila-400 p-8 lg:p-20 min-h-[calc(100svh-5rem)]">
                <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                    {livingLab.acf.nombre}
                </h2>
                <div className="flex lg:flex-row flex-col gap-10">
                    <div className="bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl lg:w-4/5">
                        <p
                            className="text-center lg:text-justify ll-description"
                            dangerouslySetInnerHTML={{
                                __html: livingLab.acf.descripcion,
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 bg-white drop-shadow-md p-4 lg:p-6 rounded-3xl lg:w-1/5">
                        <img
                            src={livingLab.acf.logo.sizes.large}
                            alt={livingLab.acf.nombre}
                            className="w-32"
                        />
                        <div className="font-bold text-center">
                            <p>{livingLab.acf.persona__contacto}</p>
                            <a
                                href={`mailto:${livingLab.acf.email_contacto}`}
                                className="text-amarillo hover:text-lila-900 transition-all duration-300"
                            >
                                {livingLab.acf.email_contacto}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:gap-10">
                    {testeosShow && (
                        <div className="lg:w-1/2">
                            <h3 className="mt-8 mb-8 font-extrabold text-3xl text-amarillo">
                                Testings
                            </h3>
                            <div className="flex flex-wrap justify-between lg:justify-start gap-8 lg:gap-14 mt-8 pb-20 lg:pb-0 text-white">
                                {testeosFinal.map((testeo) => (
                                    <Testeo
                                        key={testeo.id}
                                        slug={testeo.slug}
                                        nombre={testeo.acf.nombre}
                                        logo={testeo.acf.logo.sizes.large}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="lg:w-1/2">
                        <h3 className="mt-8 mb-8 font-extrabold text-3xl text-amarillo">
                            Locations
                        </h3>
                        <MapContainer
                            center={[livingLab.acf.lat, livingLab.acf.log]}
                            zoom={7}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <MarkerClusterGroup
                                chunkedLoading
                                iconCreateFunction={createCustomClusterIcon}
                                maxClusterRadius={50}
                            >
                                <Marker
                                    position={[
                                        livingLab.acf.lat,
                                        livingLab.acf.log,
                                    ]}
                                    icon={livingLabIcon}
                                    key={livingLab.id}
                                >
                                    <Popup>{livingLab.acf.nombre}</Popup>
                                </Marker>
                                {livingLab.acf.dos === true && (
                                    <Marker
                                        position={[
                                            livingLab.acf.lat2,
                                            livingLab.acf.log2,
                                        ]}
                                        icon={livingLabIcon}
                                        key={livingLab.lat2}
                                    >
                                        <Popup>{livingLab.acf.nombre}</Popup>
                                    </Marker>
                                )}
                                {livingLab.acf.tres === true && (
                                    <Marker
                                        position={[
                                            livingLab.acf.lat3,
                                            livingLab.acf.log3,
                                        ]}
                                        icon={livingLabIcon}
                                        key={livingLab.lat3}
                                    >
                                        <Popup>{livingLab.acf.nombre}</Popup>
                                    </Marker>
                                )}
                                {livingLab.acf.cuatro === true && (
                                    <Marker
                                        position={[
                                            livingLab.acf.lat4,
                                            livingLab.acf.log4,
                                        ]}
                                        icon={livingLabIcon}
                                        key={livingLab.lat4}
                                    >
                                        <Popup>{livingLab.acf.nombre}</Popup>
                                    </Marker>
                                )}
                                {livingLab.acf.cinco === true && (
                                    <Marker
                                        position={[
                                            livingLab.acf.lat5,
                                            livingLab.acf.log5,
                                        ]}
                                        icon={livingLabIcon}
                                        key={livingLab.lat5}
                                    >
                                        <Popup>{livingLab.acf.nombre}</Popup>
                                    </Marker>
                                )}
                                {livingLab.acf.seis === true && (
                                    <Marker
                                        position={[
                                            livingLab.acf.lat6,
                                            livingLab.acf.log6,
                                        ]}
                                        icon={livingLabIcon}
                                        key={livingLab.lat6}
                                    >
                                        <Popup>{livingLab.acf.nombre}</Popup>
                                    </Marker>
                                )}
                            </MarkerClusterGroup>
                        </MapContainer>
                    </div>
                </div>
                {/* <div>
                    <h3 className="mt-8 mb-8 font-extrabold text-3xl text-amarillo">
                        News
                    </h3>
                </div> */}
            </div>

            <PageTransition />
        </>
    )
}

export default LivingLabPage
