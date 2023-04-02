import React from 'react'
import {IconType}

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType
}

const SidebarItem = () => {
  return (
    <div>SidebarItem</div>
  )
}

export default SidebarItem