import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

function App() {
  const defaultPosition = [54.508, -1.55]

  return (
    <main className="app">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        minZoom={3}
        maxZoom={19}
        zoomControl={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </main>
  )
}

export default App