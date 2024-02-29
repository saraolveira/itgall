import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
const Map = ({ livingLabs }) => {
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.freepik.com/256/684/684809.png",
        iconSize: [38, 38],
    })
    if (livingLabs.length === 0) return <></>
    return (
        <>
            <MapContainer center={[48.8566, 2.3522]} zoom={4}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {livingLabs.map((marker) => {
                    const lat = marker.acf.lat
                    const log = marker.acf.log
                    return (
                        <Marker
                            position={[lat, log]}
                            icon={customIcon}
                            key={marker.id}
                        >
                            <Popup>{marker.acf.nombre}</Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </>
    )
}

export default Map
