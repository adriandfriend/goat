import React from 'react'

const Device = (props) => {

  const {osName, osVersion, browserName, browserVersion, mobileVendor, mobileModel} = props
  console.log(props)
  return (
    <div>
      <ul>
        <li>{`OS: ${osName} v${osVersion}`}</li>
        <li>{`Browser: ${browserName} v${browserVersion}`}</li>
        {mobileVendor !== 'none' && <li>{`Device: ${mobileVendor} ${mobileModel}`}</li>}
      </ul>
    </div>
  )

}

export default Device