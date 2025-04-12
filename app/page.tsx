'use client'

import HighlightPopover from '@/components/highlight-popover'
import MagicMoveWord from '@/components/magic-move-word'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Dancing_Script } from 'next/font/google'
import Link from 'next/link'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
})

export default function LetterPage() {
  return (
    <div className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Card className='w-full max-w-3xl shadow-lg my-8'>
        <CardHeader>
          <CardTitle className='w-full flex items-center justify-between align-top'>
            <span
              className={`${dancingScript.className} text-3xl text-gray-800 -rotate-3 inline-block`}
            >
              Being Anti-Agile
            </span>
            <span className='text-xs text-muted-foreground inline-block items-center flex gap-1 bg-gray-100 rounded px-2 py-1'>
              <span className='h-2 w-2 bg-red-500 rounded-full animate-pulse inline-block' />{' '}
              means clickable
            </span>
          </CardTitle>
          <CardDescription>April 11, 2025</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <p>
            A lot of indiepreneurs and founders tout the importance of being{' '}
            <HighlightPopover
              triggerContent='antifragile'
              popoverTitle='Antifragility'
              popoverContent={
                <p className='text-xs text-muted-foreground'>
                  Antifragility is the idea that you can thrive in adversity and
                  grow stronger from challenges. Turning the tides, extracting
                  opportunity from danger.
                </p>
              }
            />
            . Well... I did quite the opposite. I turned a great opportunity
            into a lagging product.
          </p>

          <p>In a way, I flipped some character sequences.</p>

          <div className='flex justify-center w-full'>
            <MagicMoveWord
              scrambledWord='I was, antifragile'
              correctWord='I was anti-agile, fr'
            />
          </div>

          <p>
            This is my story of how I kept a great potential collecting dust for
            two years.
          </p>

          <Separator />

          <h2
            className={`${dancingScript.className} text-xl text-gray-800 inline-block`}
          >
            Circa 2023...
          </h2>

          <p>
            When the GPT API was first released, I was one of the quick to
            create an agentic news notification system with GPT, first starting
            with Hacker News. I had a couple of reasonings and philosophies
            while building it.
          </p>

          <ul className='list-disc pl-8 space-y-1'>
            <li>
              <HighlightPopover
                triggerContent='News should come to me, not vice versa.'
                popoverTitle={
                  <>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500'
                      href='https://www.theverge.com/2023/1/31/23579552/artifact-instagram-cofounders-kevin-systrom-mike-krieger-news-app'
                    >
                      Artifact
                    </Link>
                    : The TikTok for text
                  </>
                }
                popoverContent={
                  <p className='text-xs text-muted-foreground line-height'>
                    Artifact was a personalized news app developed by Instagram
                    co-founders Kevin Systrom and Mike Krieger. The more you
                    engage with the app, the better it becomes at surfacing
                    relevant content. However,{' '}
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500'
                      href='https://www.theverge.com/2024/1/12/24036539/artifact-shutting-down-kevin-systrom'
                    >
                      it didn't even last a year
                    </Link>
                    . I just think this just turned news into doomscrolling.
                  </p>
                }
              />
            </li>
            <li>
              <HighlightPopover
                triggerContent='Tangible Algorithm'
                popoverTitle={
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                    href='https://www.theatlantic.com/technology/archive/2022/11/tiktok-instagram-video-feeds-ai-algorithm/672002/'
                  >
                    Tiktokification
                  </Link>
                }
                popoverContent={
                  <p className='text-xs text-muted-foreground line-height'>
                    Tiktokification is the trend of companies and platforms
                    adapting TikTok's algorithmic approach to their own products
                    and services. We are, in a way, paying{' '}
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500'
                      href='https://doctorow.medium.com/big-techs-attention-rents-fe97ba3fad90'
                    >
                      attention rents
                    </Link>
                    .
                  </p>
                }
              />
            </li>
            <li>
              <HighlightPopover
                triggerContent='i18n-native'
                popoverTitle={
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 italic'
                    href='https://en.wikiquote.org/wiki/William_Gibson#:~:text=Press%20(December%201991)-,The%20future%20is%20already%20here%20%E2%80%94%20it%27s%20just%20not%20very%20evenly%20distributed.,-He%20is%20reported'
                  >
                    The future is already here. It's just not very evenly
                    distributed.
                  </Link>
                }
                popoverContent={
                  <p className='text-xs text-muted-foreground line-height'>
                    For example, my friends in the US learned about GPT-4o Image
                    Gen in late March, whereas my Korean friends leared about it
                    in early April. Being AI-native, I wanted to fix that.
                  </p>
                }
              />
            </li>
            <li>
              <HighlightPopover
                triggerContent='Open Source'
                popoverTitle={
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                    href='https://ossacc.com/'
                  >
                    OSS / ACC
                  </Link>
                }
                popoverContent={
                  <p className='text-xs text-muted-foreground line-height'>
                    As such, being so anti-tiktok, I thought the apex of user
                    controllability and democratic access was open source.
                  </p>
                }
              />
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
