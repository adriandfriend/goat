import React, {useState} from 'react'
import './App.css'
import Location from './components/location'
import Device from './components/device'
import {
  StaticGoogleMap,
  Marker
} from 'react-static-google-map'

const App = () => {

  const [coords, setCoords] = useState()
  const [highAccuracy, setHighAccuracy] = useState(false)

  const onEvent = (event) => {
    setCoords({
      accuracy: event.coords.accuracy,
      latitude: event.coords.latitude,
      longitude: event.coords.longitude,
      timestamp: event.timestamp,
    })
  }

  const onEventError = (event) => {
    console.log(event)
  }

  const options = {
    enableHighAccuracy: {highAccuracy},
    timeout: 5000,
    maximumAge: 0
  }

  const onClick = async () => {
    await navigator.geolocation.getCurrentPosition(onEvent, onEventError, options)
  }

  const handleCheckedChange = (event) => {
    setHighAccuracy(event.target.checked)
  }

  return (
    <div className="App">
      <header>
        <h1>G.O.A.T <span role="img" aria-label="goat emoji">🐐</span></h1>
        <h4>(Geolocation Output Accuracy Tester)</h4>
      </header>
      <section>
        <Device />
        <label htmlFor="accuracy">
          <input type="checkbox" id="accuracy" onChange={handleCheckedChange} />
          Enable High Accuracy
        </label>
        <button
          className="btn"
          onClick={onClick}
        >
          Get Location
        </button>
        {coords && <Location {...coords} />}
        {coords &&
          <StaticGoogleMap
            size="300x250"
            apiKey="AIzaSyBXaEL49NrCDAEgroJrIPeG9VVgF61Sk1M"
            scale="2"
            className="map"
          >
            <Marker.Group>
              <Marker location={`${coords.latitude},${coords.longitude}`} />
            </Marker.Group>
          </StaticGoogleMap>
        }
      </section>
    </div>
  )
}

export default App;
