import Link from 'next/link'
import { NavbarConfig, sidenavLinks } from './sidenavLinks'

function SideNavListItem(props: NavbarConfig) {
  return (
    <li className="p-1 flex items-center gap-3 hover:bg-slate-800">
      {<props.Icon />}
      <Link className="text-sm" href={props.path}>
        {props.label}
      </Link>
    </li>
  )
}

function SideNavList() {
  return (
    <ul>
      {sidenavLinks.map((link) => {
        return <SideNavListItem {...link} key={link.label} />
      })}
    </ul>
  )
}

export async function SideNav() {
  //   await fetch('https://services.revpay.com.br/auth.svc/user/me')

  return (
    <div>
      <h2 className="mb-3">Menu Principal</h2>
      <nav>
        <SideNavList />
      </nav>
    </div>
  )
}
