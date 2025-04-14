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
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const FavoriteButton = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isPinging, setIsPinging] = useState(false)

  useEffect(() => {
    if (isProcessing) {
      setIsPinging(true)
      return
    }
  }, [isProcessing])

  const handleClick = async () => {
    setIsProcessing(true)
    // Simulate async operation with 3-second delay
    setTimeout(() => {
      setIsFavorite(!isFavorite)
      toast.success(`${isFavorite ? 'Removed from' : 'Added to'} favorites`)
      setIsProcessing(false)
      setIsPinging(false)
    }, 3000)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isPinging}
            onClick={handleClick}
            size='icon'
            variant='outline'
            className={cn(
              'transition-colors duration-300 cursor-pointer',
              isFavorite ? 'bg-red-100 hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900 border-red-400 dark:border-red-600' : ''
            )}
          >
            <span className='relative inline-flex size-4 items-center justify-center'>
              <div className='relative inline-flex size-4 items-center justify-center'>
                <span
                  className={cn(
                    'absolute inline-flex size-full rounded-full bg-red-400 transition-all duration-300 ease-in-out',
                    isPinging ? 'animate-ping opacity-75' : 'opacity-0'
                  )}
                />
                <div
                  className={cn(
                    'absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out',
                  )}
                >
                  <HeartIcon
                    className={cn(
                      'size-4 transition-colors duration-300 ease-in-out dark:text-red-500',
                      isFavorite ? 'text-red-500' : 'text-muted-foreground',
                    )}
                    fill={isFavorite ? 'currentColor' : 'none'}
                  />
                </div>
              </div>
            </span>
            <span className='sr-only'>Favorite</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Favorite</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
