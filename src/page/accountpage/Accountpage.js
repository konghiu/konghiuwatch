import React from 'react'
import { Outlet } from 'react-router-dom'
import './accountpage.css'

const Accountpage = () => {
     return (
          <div className='account-page'>
               <Outlet />
          </div>
     )
}

export default Accountpage