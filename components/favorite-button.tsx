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
            className='relative rounded-none bg-background text-muted-foreground'
            disabled={isPinging}
            onClick={handleClick}
            size='icon'
            variant='ghost'
          >
            <span className='relative inline-flex size-4 items-center justify-center'>
              {isPinging && (
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75' />
              )}
              <HeartIcon
                className={cn(
                  'size-4',
                  isFavorite ? 'text-red-500' : 'text-muted-foreground',
                )}
                fill={isFavorite ? 'currentColor' : 'none'}
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
