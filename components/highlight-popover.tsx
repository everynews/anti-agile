'use client'

import { type ReactNode, useEffect, useMemo, useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface HighlightPopoverProps {
  initialClicked?: boolean
  onStateChange?: (id: string, isClicked: boolean) => void
  triggerContent: ReactNode
  popoverTitle?: string | ReactNode
  popoverContent: ReactNode
  width?: string
}

const highlightClasses = [
  'highlight-1',
  'highlight-2',
  'highlight-3',
  'highlight-4',
  'highlight-5',
  'highlight-6',
]

const HighlightPopover = ({
  initialClicked = false,
  onStateChange,
  triggerContent,
  popoverTitle,
  popoverContent,
  width = 'w-64',
}: HighlightPopoverProps) => {
  const [isClicked, setIsClicked] = useState(initialClicked)

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

  const handleClick = () => {
    const newState = true
    setIsClicked(newState)
    onStateChange?.(popoverTitle?.toString() || '', newState)
  }

  useEffect(() => {
    setIsClicked(initialClicked)
  }, [initialClicked])

  return (
    <Popover
      onOpenChange={(open: boolean) => open && !isClicked && handleClick()}
    >
      <PopoverTrigger
        className={`cursor-pointer inline-block relative ${highlightClass}`}
        type='button'
      >
        {!isClicked && (
          <span className='absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-300 rounded-full animate-pulse' />
        )}
        {triggerContent}
      </PopoverTrigger>
      <PopoverContent className={`${width} z-50`}>
        <div className='space-y-2'>
          {/* popoverTitle switch as string or ReactNode */}
          {popoverTitle &&
            (typeof popoverTitle === 'string' ? (
              <h4 className='text-sm font-semibold'>{popoverTitle}</h4>
            ) : (
              popoverTitle
            ))}
          {popoverContent}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default HighlightPopover
