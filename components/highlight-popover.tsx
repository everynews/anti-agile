'use client'

import { type ReactNode, useMemo } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface HighlightPopoverProps {
  triggerContent: ReactNode
  popoverTitle?: string | ReactNode
  popoverContent: ReactNode
  width?: string
  direction?: 'bottom' | 'top' | 'left' | 'right'
}

const highlightClasses = [
  'highlight-1',
  'highlight-2',
  'highlight-3',
  'highlight-4',
  'highlight-5',
  'highlight-6',
]

export const HighlightPopover = ({
  triggerContent,
  popoverTitle,
  popoverContent,
  direction = 'bottom',
}: HighlightPopoverProps) => {
  const highlightClass = useMemo(() => {
    const titleString = triggerContent?.toString() || ''
    // Use a more deterministic hashing algorithm
    let hash = 0
    for (let i = 0; i < titleString.length; i++) {
      const char = titleString.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }
    // Ensure positive index
    const index = Math.abs(hash) % highlightClasses.length
    return highlightClasses[index]
  }, [triggerContent])

  return (
    <Popover>
      <PopoverTrigger
        className={`cursor-pointer inline-block relative ${highlightClass}`}
        type='button'
      >
        {triggerContent}
      </PopoverTrigger>
      <PopoverContent className='w-96' side={direction}>
        <div className='space-y-2'>
          {popoverTitle &&
            (typeof popoverTitle === 'string' ? (
              <h4 className='text-lg font-bold'>{popoverTitle}</h4>
            ) : (
              popoverTitle
            ))}
          {popoverContent}
        </div>
      </PopoverContent>
    </Popover>
  )
}
