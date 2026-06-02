import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

const DISCLAIMER_STORAGE_KEY = 'remoteFinderDisclaimerDismissed'

function App() {
  const defaultPosition = [54.508, -1.55]
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const hasDismissedDisclaimer = localStorage.getItem(DISCLAIMER_STORAGE_KEY)

    if (!hasDismissedDisclaimer) {
      setShowDisclaimer(true)
    }
  }, [])

  function dismissDisclaimer() {
    localStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true')
    setShowDisclaimer(false)
  }

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

      {showDisclaimer && (
        <div className="disclaimer-backdrop">
          <section className="disclaimer-card">
            <p className="disclaimer-label">Important notice</p>
            <h1>Remote Finder is a planning tool.</h1>
            <p>
              Remote Finder shows distance from mapped features only. It does
              not confirm land ownership, legal access, permission, hazards,
              safety, or suitability for any activity.
            </p>
            <button type="button" onClick={dismissDisclaimer}>
              I understand
            </button>
          </section>
        </div>
      )}
    </main>
  )
}

export default App