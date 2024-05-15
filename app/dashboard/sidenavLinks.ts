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
    path: '/store',
    permission: ['ADMIN']
  },
  {
    Icon: Store,
    label: 'Mesa de Antifraude',
    path: '/fraud',
    permission: ['ADMIN']
  },
  {
    Icon: Users,
    label: 'Clientes',
    path: '/clients',
    permission: ['ADMIN', 'CLIENT']
  },
  {
    Icon: Users,
    label: 'Usuários',
    path: '/users',
    permission: ['ADMIN', 'CLIENT']
  },
  {
    Icon: CircleDollarSign,
    label: 'Cobrança',
    path: '/billing',
    permission: ['ADMIN'],
    subItem: [
      {
        Icon: CircleDollarSign,
        label: 'Parcelas',
        path: '/billing/installments',
        permission: ['ADMIN']
      }
    ]
  },
  {
    Icon: BanknoteIcon,
    label: 'Total de Vendas',
    path: '/sales',
    permission: ['ADMIN']
  },
  {
    label: 'RevVideos',
    path: '/revVideos',
    Icon: VideoIcon,
    permission: ['ADMIN']
  },
  {
    path: '/risk',
    permission: ['ADMIN'],
    label: 'Visão Geral de Risco',
    Icon: BarChart2Icon
  }
]
