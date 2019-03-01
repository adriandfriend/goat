import React from 'react'

const Location = (props) => {

  const {latitude, longitude, accuracy} = props

  return (
    <div>
      <p>Latitude : {latitude}</p>
      <p>Longitude : {longitude}</p>
      <p>Accuracy: {accuracy / 1000} metres</p>
    </div>
  )

}

export default Location