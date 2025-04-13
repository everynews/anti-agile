'use client'

import { MetaKeyIcon } from '@/components/meta-key'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CornerDownLeftIcon, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const ActionButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const triggerAction = () => {
    if (!isSubmitting) {
      setIsSubmitting(true)
      setTimeout(() => {
        toast.success('Action completed successfully!')
        setIsSubmitting(false)
      }, 3000)
    }
  }

  // Simplified keyboard shortcut handling
  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      (event.metaKey || event.ctrlKey) &&
      (event.key === 'Enter' || event.key === 's' || event.key === 'S')
    ) {
      event.preventDefault()
      triggerAction()
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }

  return (
    <Button
      autoFocus={false}
      className='relative'
      disabled={isSubmitting}
      onClick={triggerAction}
    >
      <div
        className={cn(
          'flex items-center justify-between gap-2 transition-opacity duration-300 ease-in-out',
          isSubmitting ? 'opacity-0' : 'opacity-100'
        )}
      >
        Action
        <kbd className='flex items-center justify-center gap-0.5'>
          <MetaKeyIcon className='my-auto' />
          <CornerDownLeftIcon className='my-auto' />
        </kbd>
      </div>
      <div className={cn(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out',
        isSubmitting ? 'opacity-100' : 'opacity-0'
      )}>
        <LoaderCircle className='size-4 animate-spin' />
      </div>
    </Button>
  )
}
