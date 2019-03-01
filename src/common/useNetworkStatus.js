import { useState, useEffect } from 'react'

const getConnection = () => {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
}

const useNetworkStatus = () => {

  const [connection, updateNetworkConnection] = useState(getConnection());

  const updateConnectionStatus = () => {
    updateNetworkConnection(getConnection)
  }

  useEffect(() => {
    connection.addEventListener("change", updateConnectionStatus);
    return () => {
      connection.removeEventListener("change", updateConnectionStatus);
    };
  }, []);

  return connection;
}

export default useNetworkStatus;