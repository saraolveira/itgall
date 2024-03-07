import { Icon, divIcon } from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"

const Map = ({ livingLabs, colaboradores }) => {
    const livingLabIcon = new Icon({
        iconUrl: "/itgall-iso-oscuro.svg",
        iconSize: [38, 38],
    })

    const colaboradoresIcon = new Icon({
        iconUrl: "/itgall-iso-claro.svg",
        iconSize: [38, 38],
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-number"><div>${cluster.getChildCount()}</div></div>`,
            iconSize: [38, 38],
        })
    }

    const segundasUbis = livingLabs.filter(
        (segunda) => segunda.acf.dos === true
    )
    const tercerasUbis = livingLabs.filter(
        (tercera) => tercera.acf.tres === true
    )
    const cuartasUbis = livingLabs.filter(
        (cuarta) => cuarta.acf.cuatro === true
    )
    const quintasUbis = livingLabs.filter((quinta) => quinta.acf.cinco === true)
    const sextasUbis = livingLabs.filter((sexta) => sexta.acf.seis === true)

    if (livingLabs.length === 0) return <></>
    return (
        <>
            <MapContainer
                center={[42.383715017698734, -3.6361885580736617]}
                zoom={7}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                    maxClusterRadius={50}
                >
                    {livingLabs.map((marker) => {
                        const lat = marker.acf.lat
                        const log = marker.acf.log
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}

                    {colaboradores.map((marker) => {
                        const lat = marker.acf.lat
                        const log = marker.acf.log
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={colaboradoresIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}

                    {segundasUbis.map((marker) => {
                        const lat = marker.acf.lat2
                        const log = marker.acf.log2
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}
                    {tercerasUbis.map((marker) => {
                        const lat = marker.acf.lat3
                        const log = marker.acf.log3
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}
                    {cuartasUbis.map((marker) => {
                        const lat = marker.acf.lat4
                        const log = marker.acf.log4
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}
                    {quintasUbis.map((marker) => {
                        const lat = marker.acf.lat5
                        const log = marker.acf.log5
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}
                    {sextasUbis.map((marker) => {
                        const lat = marker.acf.lat6
                        const log = marker.acf.log6
                        return (
                            <Marker
                                position={[lat, log]}
                                icon={livingLabIcon}
                                key={marker.id}
                            >
                                <Popup>{marker.acf.nombre}</Popup>
                            </Marker>
                        )
                    })}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}

export default Map
