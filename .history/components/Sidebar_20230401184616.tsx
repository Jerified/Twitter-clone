import React from 'react'
import {  BsBellFill } from 'react-icons'

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsBellFill
        },
        {
            label: 'Notifications',
            
        }
    ]
  return (
    <div className='text-white'>Sidebar</div>
  )
}

export default Sidebar