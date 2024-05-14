import { Button } from '@/components/ui/button'
import { SideNav } from './sidenav'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex flex-col min-h-screen justify-between pt-8 p-4 border-r border-r-gray-50/5 md:w-64">
        <SideNav />
        <div className="border-t border-t-gray-50/5 pt-4">
          <Avatar className="mx-auto mb-1">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <p className="mb-4 text-center">Arrazo Couro</p>
          <Button className="w-full">Sair</Button>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
