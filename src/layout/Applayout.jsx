import React from 'react'
import ButtonAppBar from '../component/AppBar'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        <ButtonAppBar/>
        <Outlet/>
    </div>
  )
}

export default Applayout