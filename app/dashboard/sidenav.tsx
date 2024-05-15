'use client'

import Link from 'next/link'
import { NavbarConfig, sidenavLinks } from './sidenavLinks'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SideNavListItemProps extends NavbarConfig {
  isSubItem?: boolean
}

function SideNavListItem(props: SideNavListItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const path = `/dashboard${props.path}`

  function onToogle() {
    setIsOpen((prevState) => !prevState)
  }

  const isExpandable = props.subItem && props.subItem?.length > 0

  const icon = isOpen ? (
    <ChevronUp className="cursor-pointer" onClick={onToogle} size={16} />
  ) : (
    <ChevronDown className="cursor-pointer" onClick={onToogle} size={16} />
  )

  return (
    <>
      <li className="p-1 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {<props.Icon />}
          <Link
            className={cn(
              'text-sm font-semibold',
              props.isSubItem && 'text-xs',
              'hover:text-primary'
            )}
            href={path}
          >
            {props.label}
          </Link>
        </div>
        {isExpandable ? icon : null}
      </li>
      {isExpandable && props.subItem
        ? isOpen && <SideNavList isSubItem links={props.subItem} />
        : null}
    </>
  )
}

interface SideNavListProps {
  links: NavbarConfig[]
  isSubItem?: boolean
}

function SideNavList({ links, isSubItem }: SideNavListProps) {
  return (
    <ul className={cn(isSubItem && 'ml-2')}>
      {links.map((link) => {
        return <SideNavListItem {...link} key={link.label} />
      })}
    </ul>
  )
}

export function SideNav() {
  //   await fetch('https://services.revpay.com.br/auth.svc/user/me')

  return (
    <aside>
      <h2 className="mb-3 font-bold">Menu Principal</h2>
      <nav>
        <SideNavList links={sidenavLinks} />
      </nav>
    </aside>
  )
}
