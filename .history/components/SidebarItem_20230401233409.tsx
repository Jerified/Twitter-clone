import React from 'react'
import {IconType} from 'react-icons'

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType
    on
}

const SidebarItem = () => {
  return (
    <div>SidebarItem</div>
  )
}

export default SidebarItem