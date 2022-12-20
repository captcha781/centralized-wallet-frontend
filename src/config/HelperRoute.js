import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userInfo } from '../functions/userInfo'

const HelperRoute = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if (auth.auth) {
            userInfo(dispatch)
        }
    }, [auth.auth, dispatch])

    return (
        <React.Fragment />
    )
}

export default HelperRoute