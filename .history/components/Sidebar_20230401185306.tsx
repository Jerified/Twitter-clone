import React from 'react'
import { BsHouseFill, BsBellFill } from 'react-icons/Bs'
import 

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
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }
    ]
  return (
    <div className='text-white'>Sidebar</div>
  )
}

export default Sidebar