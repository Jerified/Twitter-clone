import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { useRouter } from 'next/router'

const SidebarLogo = () => {
const router = useRouter()
  return (
    <div className='rounded-full w-14 h-14 p-4 flex items-center justify-center  hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'>
        <BsTwitter  />
    </div>
  )
}

export default SidebarLogo