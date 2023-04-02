import React from 'react'
import {  BsBellFill } from 'react-icons'

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill
        }
    ]
  return (
    <div className='text-white'>Sidebar</div>
  )
}

export default Sidebar