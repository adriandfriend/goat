import React from 'react'
import {
  osName,
  osVersion,
  browserVersion,
  browserName,
  mobileVendor,
  mobileModel
} from "react-device-detect"

const Device = () => (
  <div>
    <ul>
      <li>{`OS: ${osName} v${osVersion}`}</li>
      <li>{`Browser: ${browserName} v${browserVersion}`}</li>
      {mobileVendor !== 'none' && <li>{`Device: ${mobileVendor} ${mobileModel}`}</li>}
    </ul>
  </div>
)

export default Device