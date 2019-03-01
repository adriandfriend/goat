import React, {useState, useEffect} from 'react'
import './App.css'
// import useGeolocation from './common/useGeoLocation'
import useNetworkStatus from './common/useNetworkStatus'
import Location from './components/location'
import {
  StaticGoogleMap,
  Marker
} from 'react-static-google-map'

const App = () => {

  const [coords, setCoords] = useState()
  const network = useNetworkStatus()

  const onEvent = (event) => {
    setCoords({
      accuracy: event.coords.accuracy,
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      timestamp: event.timestamp,
    })
  }

  const onClick = async () => {
    await navigator.geolocation.getCurrentPosition(onEvent)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>G.O.A.T <span role="img" aria-label="goat emoji">🐐</span></h1>
        <h4>(Geolocation Output Accuracy Tester)</h4>
        <p>Effective Network Type {network.effectiveType}</p>
        <button
          className="btn"
          onClick={onClick}
        >
          Get Location
        </button>
        {coords && <Location {...coords} />}
        {coords &&  <StaticGoogleMap
          size="300x250"
          apiKey="AIzaSyBXaEL49NrCDAEgroJrIPeG9VVgF61Sk1M"
          scale="2"
        >
          <Marker.Group>
            <Marker location={`${coords.latitude},${coords.longitude}`} />
        </Marker.Group>
      </StaticGoogleMap>}
      </header>
    </div>
  )
}

export default App;
