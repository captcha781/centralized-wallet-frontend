import React from 'react'
import {Link} from "react-router-dom"


const Navigation = () => {
  return (
    <nav className='w-full bg-gray-800 p-3 flex justify-between items-center'>
        <div className='text-lg font-semibold text-white'>D-Wallet</div>
        <div className='flex justify-between items-center text-white'>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/signin"}>Sign In</Link>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/signup"}>Sign Up</Link>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/"}>Home</Link>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/deposit"}>Deposit</Link>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/withdraw"}>Withdraw</Link>
            <Link className='px-3 py-1.5 rounded-sm bg-transparent hover:bg-indigo-500 hover:bg-opacity-30' to={"/transfer"}>Transfer</Link>
        </div>
    </nav>
  )
}

export default Navigation
// {/* <button className='px-3 py-1.5 rounded-sm bg-transparent bg-gray-500 bg-opacity-30 hover:bg-indigo-500 hover:bg-opacity-30 flex items-center'><div className='metamask mr-2' style={{backgroundImage:"url('/icons/metamask.svg')"}} /> Connect MetaMask</button> */}