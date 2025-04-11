'use client'

import type { ReactNode } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface HighlightPopoverProps {
  id: string
  highlightClass: string
  isClicked: boolean
  handleClick: (id: string) => void
  triggerContent: ReactNode
  popoverTitle?: string
  popoverContent: ReactNode
  width?: string
}

const HighlightPopover = ({
  id,
  highlightClass,
  isClicked,
  handleClick,
  triggerContent,
  popoverTitle,
  popoverContent,
  width = 'w-64',
}: HighlightPopoverProps) => {
  return (
    <Popover
      onOpenChange={(open: boolean) => open && !isClicked && handleClick(id)}
    >
      <PopoverTrigger

          className={`cursor-pointer inline-block relative ${highlightClass}`}
          type='button'
        >
          {!isClicked && (
            <span className='absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse' />
          )}
          {triggerContent}

      </PopoverTrigger>
      <PopoverContent className={`${width} z-50`}>
        <div className='space-y-2'>
          {popoverTitle && (
            <h4 className='text-sm font-semibold'>{popoverTitle}</h4>
          )}
          {popoverContent}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default HighlightPopover
