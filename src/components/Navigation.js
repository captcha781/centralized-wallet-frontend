import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useLocation} from "react-router-dom"


const Navigation = () => {
  const auth = useSelector(state => state.auth).auth
  const location = useLocation()
  return (
    <nav className='navBar'>
        <div className='navBrand'>D-Wallet</div>
        <div className='navFlex'>
            <Link className={location.pathname ==="/" ? 'navLink navActive' : 'navLink'} to={"/"}>Home</Link>
            {!auth && <Link className={location.pathname.includes("signin") ? 'navLink navActive' : 'navLink'} to={"/signin"}>Sign In</Link>}
            {!auth && <Link className={location.pathname.includes("signup") ? 'navLink navActive' : 'navLink'} to={"/signup"}>Sign Up</Link>}
            {auth && <Link className={location.pathname.includes("deposit") ? 'navLink navActive' : 'navLink'} to={"/deposit"}>Deposit</Link>}
            {auth && <Link className={location.pathname.includes("withdraw") ? 'navLink navActive' : 'navLink'} to={"/withdraw"}>Withdraw</Link>}
            {auth && <Link className={location.pathname.includes("transfer") ? 'navLink navActive' : 'navLink'} to={"/transfer"}>Transfer</Link>}
        </div>
    </nav>
  )
}

export default Navigation
// {/* <button className='px-3 py-1.5 rounded-sm bg-transparent bg-gray-500 bg-opacity-30 hover:bg-indigo-500 hover:bg-opacity-30 flex items-center'><div className='metamask mr-2' style={{backgroundImage:"url('/icons/metamask.svg')"}} /> Connect MetaMask</button> */}