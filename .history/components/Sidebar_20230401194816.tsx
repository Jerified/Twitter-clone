import React from 'react'
import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

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
    <div className='text-white'>
        Sidebar
</div>
  )
}

export default Sidebar