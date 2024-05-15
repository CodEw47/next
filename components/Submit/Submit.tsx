import { useFormStatus } from 'react-dom'
import { PropsWithChildren } from 'react'
import { Button, ButtonProps } from '../ui/button'
import { Loader2 } from 'lucide-react'

export function Submit({ children, ...buttonProps }: PropsWithChildren<ButtonProps>) {
  const status = useFormStatus()

  return (
    <Button disabled={status.pending} {...buttonProps}>
      {status.pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
    </Button>
  )
}
