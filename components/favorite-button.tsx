'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { HeartIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const FavoriteButton = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = async () => {
    setIsProcessing(true)

    // Simulate async operation with 3-second delay
    setTimeout(() => {
      setIsFavorite(!isFavorite)
      toast.success(`${isFavorite ? 'Removed from' : 'Added to'} favorites`)
      setIsProcessing(false)
    }, 3000)
  }

  const isPinging = isProcessing

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isPinging}
            onClick={handleClick}
            size='icon'
            variant='outline'
          >
            <span className='relative inline-flex size-4 items-center justify-center'>
              <span className={cn(
                'absolute inline-flex size-full rounded-full bg-red-400 transition-opacity duration-300 ease-in-out',
                isPinging ? 'animate-ping opacity-75' : 'opacity-0'
              )} />
              <HeartIcon
                className={cn(
                  'size-4 transition-colors transition-[fill] duration-300 ease-in-out',
                  isFavorite ? 'text-red-500' : 'text-muted-foreground',
                )}
                style={{
                  fill: isFavorite ? 'currentColor' : 'none',
                  transition: 'fill 300ms ease-in-out, color 300ms ease-in-out'
                }}
              />
            </span>
            <span className='sr-only'>Favorite</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Favorite</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
