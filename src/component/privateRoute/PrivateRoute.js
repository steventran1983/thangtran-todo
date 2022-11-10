import React from 'react'
import {Outlet,Navigate}	 from 'react-router-dom'
import useAuth from '../../customHook/useAuth/useAuth'

const PrivateRoute = () => {
  const { auth } = useAuth() 
  
  console.log(`ths is ${auth}`)
	if (auth===undefined) return 'Loading...'

  return auth === true ? <Outlet/> : <Navigate to="/auth"/>
  
}

export default PrivateRoute