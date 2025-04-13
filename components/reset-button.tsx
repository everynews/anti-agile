'use client'

import { MetaKeyIcon } from '@/components/meta-key'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Delete, LoaderCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface ResetButtonProps {
  title: string
  description: string
  disabled?: boolean
  isPending?: boolean
  onReset: () => void
}

export const ResetButton: React.FC<ResetButtonProps> = ({
  title,
  description,
  disabled,
  isPending = false,
  onReset,
}: ResetButtonProps) => {
  const [open, setOpen] = useState(false)

  const resetButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Backspace') {
        // If the user is typing something, typically user expects Command/Ctrl + Backspace to delete the input, not deleting the data.
        // In that case, we should not open the reset popover.
        const { activeElement } = document
        if (
          activeElement instanceof HTMLInputElement ||
          activeElement instanceof HTMLTextAreaElement
        ) {
          return
        }
        event.preventDefault()
        setOpen(true)
      }
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Popover
      onOpenChange={(opened) => {
        setOpen(opened)
      }}
      open={open}
    >
      <PopoverTrigger asChild>
        <Button
          autoFocus={false}
          className='relative'
          disabled={disabled || isPending}
          variant='destructive'
        >
          <div
            className={`flex items-center justify-between gap-2 transition-opacity duration-200 ${
              isPending ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Reset
            <kbd className='flex items-center justify-center'>
              <MetaKeyIcon className='size-3' />
              <Delete className='size-3' />
            </kbd>
          </div>
          {isPending && (
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <LoaderCircle className='size-4 animate-spin' />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          resetButtonRef.current?.focus()
        }}
      >
        <div className='grid gap-4'>
          <h4 className='font-semibold leading-none'>{title}</h4>
          <p className='text-sm text-muted-foreground'>{description}</p>
          <div className='flex justify-end gap-2'>
            <Button
              ref={resetButtonRef}
              className={cn(
                'focus:animate-pulse focus:bg-destructive focus:text-destructive-foreground',
              )}
              disabled={isPending || disabled}
              onClick={() => {
                onReset()
                setOpen(false)
              }}
              size='sm'
              variant='destructive'
            >
              {isPending ? (
                <LoaderCircle />
              ) : (
                <span className='flex gap-1'>
                  Reset <Delete className='size-4' />
                </span>
              )}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
