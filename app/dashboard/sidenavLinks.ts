import {
  BanknoteIcon,
  BarChart2Icon,
  CircleDollarSign,
  LucideIcon,
  Store,
  Users,
  VideoIcon
} from 'lucide-react'

type Role = 'ADMIN' | 'CLIENT'

export interface NavbarConfig {
  path: string
  label: string
  Icon: LucideIcon
  permission?: Role[]
  subItem?: NavbarConfig[]
}

export const sidenavLinks: NavbarConfig[] = [
  {
    Icon: Store,
    label: 'Lojas',
    path: '/lojas',
    permission: ['ADMIN']
  },
  {
    Icon: Store,
    label: 'Mesa de Antifraude',
    path: '/mesa-antifraude',
    permission: ['ADMIN']
  },
  {
    Icon: Users,
    label: 'Clientes',
    path: '/clientes',
    permission: ['ADMIN', 'CLIENT']
  },
  {
    Icon: Users,
    label: 'Usuários',
    path: '/usuarios',
    permission: ['ADMIN', 'CLIENT']
  },
  {
    Icon: CircleDollarSign,
    label: 'Cobrança',
    path: '/cobranca',
    permission: ['ADMIN'],
    subItem: [
      {
        Icon: CircleDollarSign,
        label: 'Parcelas',
        path: '/parcelas',
        permission: ['ADMIN']
      }
    ]
  },
  {
    Icon: BanknoteIcon,
    label: 'Total de Vendas',
    path: '/total-vendas',
    permission: ['ADMIN']
  },
  {
    path: '/revVideos',
    label: 'RevVideos',
    Icon: VideoIcon,
    permission: ['ADMIN']
  },
  {
    path: '/risco-geral',
    permission: ['ADMIN'],
    label: 'Visão Geral de Risco',
    Icon: BarChart2Icon
  }
]
