import React from 'react'
import { useSelector } from 'react-redux'

const ServerInfo = () => {
    let server = useSelector(state => state.server)
    let network = server.network
  return (
    <div className='flex bg-gray-200 p-3 justify-between w-full rounded-md'>
        <div>Server Address: {server.serverAddress}</div>
        <div>Network: {network.charAt(0).toUpperCase()+network.slice(1,network.length)}</div>
    </div>
  )
}

export default ServerInfo