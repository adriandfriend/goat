
import React, {useState} from 'react'

const useGeolocation = () => {

  const [state, setState] = useState({
      loading: true,
      accuracy: null,
      latitude: null,
      longitude: null,
      timestamp: Date.now(),
  })

  let mounted = true;
  let watchId;

  const onEvent = (event) => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        timestamp: event.timestamp,
      })
    }
  }

  const onEventError = (error) => mounted && setState(oldState => (Object.assign({}, oldState, { loading: false, error })));

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError);
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError);
    return () => {
      mounted = false
      navigator.geolocation.clearWatch(watchId)
    };
  }, [0])
  return state
}
export default useGeolocation
