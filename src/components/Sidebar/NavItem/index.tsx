import { ChevronDown } from 'lucide-react'
import React, { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ icon: Icon, title }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-zinc-700 font-medium group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
