'use client'

import HighlightPopover from '@/components/highlight-popover'
import MagicMoveWord from '@/components/magic-move-word'
import { Card } from '@/components/ui/card'
import { Dancing_Script } from 'next/font/google'
import { useEffect, useState } from 'react'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
})

export default function LetterPage() {
  const [clickedItems, setClickedItems] = useState<Record<string, boolean>>({
    hobbies: false,
    reading: false,
    cafes: false,
    energy: false,
    watching: false,
    signature: false,
  })

  const [highlightClasses, setHighlightClasses] = useState<
    Record<string, string>
  >({
    hobbies: '',
    reading: '',
    cafes: '',
    energy: '',
    watching: '',
  })

  useEffect(() => {
    // Assign random highlight classes on initial render
    const highlights = {} as Record<string, string>
    const items = ['hobbies', 'reading', 'cafes', 'energy', 'watching']

    for (const item of items) {
      const randomClass = `highlight-${Math.floor(Math.random() * 10) + 1}`
      highlights[item] = randomClass
    }

    setHighlightClasses(highlights)
  }, [])

  const handleClick = (id: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  return (
    <div className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed'>
      <Card className='w-full max-w-3xl rounded-3xl shadow-lg my-8'>
        <div className='p-6 md:p-10'>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold'>Dear Friend,</h1>
              <p className='text-muted-foreground text-sm'>April 7, 2025</p>
            </div>

            <p>
              I hope this letter finds you well. It's been quite some time since
              we last spoke, and I wanted to reach out and reconnect.
            </p>

            <div>
              Life has been quite the adventure lately. I've been exploring{' '}
              <HighlightPopover
                id='hobbies'
                highlightClass={highlightClasses.hobbies}
                isClicked={clickedItems.hobbies}
                handleClick={handleClick}
                triggerContent='new hobbies'
                popoverTitle='New Hobbies'
                popoverContent={
                  <p className='text-xs text-muted-foreground'>
                    I've taken up watercolor painting and hiking on weekends.
                    The mountains have been particularly beautiful this spring.
                  </p>
                }
              />{' '}
              and interests that have brought me a great deal of joy and
              fulfillment. The changing seasons always remind me of our
              conversations about how time passes and how we grow with it.
            </div>

            <p>
              Do you remember those long walks we used to take through the park?
              The way the light filtered through the trees, creating patterns on
              the ground beneath our feet? I find myself thinking about those
              moments more often these days.
            </p>

            <div>
              I've been{' '}
              <HighlightPopover
                id='reading'
                highlightClass={highlightClasses.reading}
                isClicked={clickedItems.reading}
                handleClick={handleClick}
                triggerContent='reading more'
                popoverTitle='Book Recommendations'
                popoverContent={
                  <ul className='text-xs text-muted-foreground list-disc pl-4 space-y-1'>
                    <li>"The Overstory" by Richard Powers</li>
                    <li>"Klara and the Sun" by Kazuo Ishiguro</li>
                    <li>
                      "The Ministry for the Future" by Kim Stanley Robinson
                    </li>
                  </ul>
                }
              />{' '}
              lately – diving into books that challenge my perspective and
              broaden my understanding of the world. I think you'd appreciate
              some of the authors I've discovered. Perhaps we could exchange
              recommendations sometime?
            </div>

            <p>
              Work has been keeping me busy, but in a good way. I'm finding
              purpose in what I do, and that makes all the difference. I hope
              your professional endeavors are bringing you similar satisfaction.
            </p>

            <div>
              The city has changed since you were last here.{' '}
              <HighlightPopover
                id='cafes'
                highlightClass={highlightClasses.cafes}
                isClicked={clickedItems.cafes}
                handleClick={handleClick}
                triggerContent='New cafés have opened'
                popoverTitle='New Places to Visit'
                popoverContent={
                  <>
                    <p className='text-xs text-muted-foreground mb-1'>
                      Here are some spots you'd love:
                    </p>
                    <ul className='text-xs text-muted-foreground list-disc pl-4 space-y-1'>
                      <li>Riverside Café - amazing pastries</li>
                      <li>The Old Mill - now an art gallery</li>
                      <li>Central Park - completely renovated</li>
                    </ul>
                  </>
                }
              />
              , old buildings have been renovated, and there's a{' '}
              <HighlightPopover
                id='energy'
                highlightClass={highlightClasses.energy}
                isClicked={clickedItems.energy}
                handleClick={handleClick}
                triggerContent='vibrant energy'
                popoverTitle='City Events'
                popoverContent={
                  <p className='text-xs text-muted-foreground'>
                    The city has been hosting weekly outdoor concerts, art
                    festivals, and farmers markets. The cultural scene has
                    really blossomed in the past year.
                  </p>
                }
              />{' '}
              that permeates the streets. You should visit sometime – I'd be
              happy to show you around.
            </div>

            <p>
              I've been reflecting on our friendship and the impact you've had
              on my life. Your wisdom, kindness, and unique perspective have
              shaped me in ways I'm still discovering. For that, I am eternally
              grateful.
            </p>

            <div>
              As I write this, I'm sitting by the window,{' '}
              <HighlightPopover
                id='watching'
                highlightClass={highlightClasses.watching}
                isClicked={clickedItems.watching}
                handleClick={handleClick}
                triggerContent='watching the world go by'
                popoverTitle='My View'
                popoverContent={
                  <p className='text-xs text-muted-foreground'>
                    From my apartment, I can see the old clocktower, the river
                    winding through the city, and the mountains in the distance.
                    It's especially beautiful at sunset.
                  </p>
                }
              />
              . It's a simple pleasure, but one that brings me peace. I hope
              you're finding your own moments of tranquility amidst life's
              chaos.
            </div>

            <p>
              I'd love to hear from you when you have the time. Tell me about
              your adventures, your challenges, your triumphs. Share with me the
              small moments that have made you smile and the big decisions that
              have changed your path.
            </p>

            <p>
              Until then, take care of yourself. Remember to pause and breathe,
              to find beauty in the ordinary, and to be gentle with yourself as
              you navigate this complex world.
            </p>

            <div className='pt-6'>
              <p>With warmth and affection,</p>

              <div className='mt-6 ml-8'>
                <HighlightPopover
                  id='signature'
                  highlightClass=''
                  isClicked={clickedItems.signature}
                  handleClick={handleClick}
                  triggerContent={
                    <span
                      className={`${dancingScript.className} text-3xl text-gray-800 -rotate-3 inline-block`}
                    >
                      Sunghyun Cho
                    </span>
                  }
                  popoverContent={
                    <p className='text-sm text-muted-foreground italic'>
                      Of course this is not a legal signature
                    </p>
                  }
                />
              </div>
            </div>

            {/* Scrambled Words Section */}
            <div className='mt-12 pt-6 border-t border-gray-200'>
              <h3 className='text-lg font-medium mb-4'>
                Hover over the scrambled word to see the magic:
              </h3>
              <div className='flex flex-wrap gap-3 justify-center'>
                <MagicMoveWord scrambledWord='mysyter' correctWord='mystery' />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
