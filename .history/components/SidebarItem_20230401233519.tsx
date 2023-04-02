import React from 'react'
import {IconType} from 'react-icons'

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType
    onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, href
}) => {
  return (
    <div>SidebarItem</div>
  )
}

export default SidebarItem