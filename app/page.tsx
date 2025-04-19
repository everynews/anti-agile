'use client'

import { ActionButton } from '@/components/action-button'
import { FavoriteButton } from '@/components/favorite-button'
import { HighlightPopover } from '@/components/highlight-popover'
import { MagicMoveWord } from '@/components/magic-move-word'
import { RefreshButton } from '@/components/refresh-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { TranslatingQuote } from '@/components/translating-quote'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { cn } from '@/lib/utils'
import { TrendingUp } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
})

// Move metadata to layout.tsx for server component support

export default function Page() {
  return (
    <article className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Card className='w-full max-w-3xl shadow-lg my-8'>
        <CardHeader>
          <CardTitle className='w-full flex items-center justify-between align-top'>
            <span
              className={`${dancingScript.className} text-4xl text-foreground -rotate-1.5 inline-block`}
            >
              Dear Vercel, I'll quit being Anti-Agile
            </span>
            <div className='flex items-center gap-2'>
              <ThemeToggle />
            </div>
          </CardTitle>
          <CardDescription>
            <HighlightPopover
              triggerContent='Written by a human, not LLMs'
              popoverTitle="And That's a Flex These Days"
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  I wrote this by myself (only with basic spellcheck software).
                  I hate the ChatGPT writings like <i>I delved into...</i> or{' '}
                  <i>My endeavor...</i>.
                </p>
              }
            />
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <Alert variant='destructive' className='w-full md:hidden'>
            <AlertTitle>If I optimzie this for mobile</AlertTitle>
            <AlertDescription>
              That means less building for the actual product. I'll put a nice
              Share button here for you to send it to your computer.
              <Button
                className='w-full cursor-pointer'
                variant='outline'
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    navigator
                      .share({
                        title: "Dear Vercel, I'll quit being Anti-Agile",
                        text: 'A lot of indiepreneurs and founders tout the importance of being anti-fragile. I did quite the opposite. I turned a great opportunity into a lagging product. In a way, I flipped the order.',
                        url: window.location.href,
                      })
                      .catch((err) => {
                        alert(
                          "You just canceled or your browser doesn't support the Share API.\n\nPadme: But you know how to send the URL to your computer right? right?\n\nAnakin: (smirks)",
                        )
                      })
                  }
                }}
              >
                Share
              </Button>
            </AlertDescription>
          </Alert>
          <p>
            A lot of indiepreneurs and founders tout the importance of being
            anti-fragile. I did quite the opposite. I turned a great opportunity
            into a lagging product. In a way, I <i>flipped</i> the order.
          </p>

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
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
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
                direction='right'
                triggerContent='News should come to me, not vice versa.'
                popoverTitle={
                  <h4 className='text-lg font-bold'>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500'
                      href='https://www.theverge.com/2023/1/31/23579552/artifact-instagram-cofounders-kevin-systrom-mike-krieger-news-app'
                    >
                      TikTok for Text
                    </Link>{' '}
                    was a bad idea
                  </h4>
                }
                popoverContent={
                  <p className='text-muted-foreground line-height'>
                    Artifact was a personalized news app Instagram co-founders
                    Kevin Systrom and Mike Krieger developed. The more you
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
                    . I think this just turned news into doomscrolling.
                  </p>
                }
              />
            </li>
            <li>
              <HighlightPopover
                direction='right'
                triggerContent='Tangible Algorithm'
                popoverTitle={
                  <h4 className='text-lg font-bold'>
                    Manipulative Designs Strikes Back
                  </h4>
                }
                popoverContent={
                  <>
                    <p className='text-muted-foreground line-height'>
                      Companies parasite on your attention with manipulative
                      designs, with the latest example being Tiktokifying all
                      feeds, with algorithms steering your attention.
                    </p>

                    <p className='text-muted-foreground line-height'>
                      To fight back against this, some trailblazers suggested
                      the concept of{' '}
                      <i>
                        <strong>tangible algorithms</strong>
                      </i>
                      . One popular example is{' '}
                      <Link
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500'
                        href='https://doctorow.medium.com/big-techs-attention-rents-fe97ba3fad90'
                      >
                        Attention Settings
                      </Link>
                      .
                    </p>
                  </>
                }
              />
            </li>
            <li>
              <HighlightPopover
                direction='right'
                triggerContent='i18n-native'
                popoverTitle={
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 italic'
                    href='https://en.wikiquote.org/wiki/William_Gibson#:~:text=Press%20(December%201991)-,The%20future%20is%20already%20here%20%E2%80%94%20it%27s%20just%20not%20very%20evenly%20distributed.,-He%20is%20reported'
                  >
                    <h4 className='text-lg font-bold'>
                      <i>
                        "The future is already here. It's just not very evenly
                        distributed."
                      </i>
                    </h4>
                  </Link>
                }
                popoverContent={
                  <p className='text-muted-foreground line-height'>
                    For example, my friends in the US learned about GPT-4o Image
                    Gen in late March 2025, whereas my Korean friends learned
                    about it in early April 2025. There's still a steep
                    information gradient in this AI era. Can we do better? Or,
                    can we find entrepreneurial opportunity in this information
                    gradient?
                  </p>
                }
              />
            </li>
            <li>
              <HighlightPopover
                direction='right'
                triggerContent='Open Source'
                popoverTitle={
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                    href='https://ossacc.com/'
                  >
                    <h4 className='text-lg font-bold'>
                      <i>
                        "Either the users control the program, or the program
                        controls the users."
                      </i>
                    </h4>
                  </Link>
                }
                popoverContent={
                  <p className='text-muted-foreground line-height'>
                    A famous quote by Richard M. Stallman, founder of the Free
                    Software Foundation.
                  </p>
                }
              />
            </li>
          </ul>

          <p>
            This is why I first built what's now known as Heimdall. It was a
            crude agent that ran a cron job on the most popular HN stories and
            translated them into{' '}
            <HighlightPopover
              triggerContent='30 different languages'
              popoverTitle="This wasn't an Arbitrary Choice"
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  Non-Latin LLM tokens are expensive, so blindly following
                  pre-LLM standards like BCP 47 or Ethnologue 200 was not an
                  option. I ended up doing some heavy demographical analysis.
                  and eventually came up with this list. By my math, 99.9% of
                  the global population will read one of these 30 languages
                  natively or fluently.
                </p>
              }
            />
            This was still an infancy era of agentic web access, so I built lots
            of layers by myself, like providing recursive feedback to the agent,
            error handling, agentic web crawling, and simple RAG, albeit my
            version was very rudimentary.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            The reactions were simply amazing.
          </h2>

          <p>
            I made almost no effort in public relations, except for a tiny URL
            on my{' '}
            <HighlightPopover
              triggerContent='MikeRowSofted'
              popoverTitle={
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500'
                  href='https://cho.sh/w/5ADC58'
                >
                  <h4 className='text-lg font-bold'>
                    Microsoft Sent Me a Cease and Desist Letter
                  </h4>
                </Link>
              }
              popoverContent={
                <p className='text-muted-foreground'>
                  Just like the infamous MikeRowSofted incident, Microsoft sent
                  a cease and desist letter to me for my browser extension that
                  bypassed all Microsoft Edge browser checks.
                </p>
              }
            />{' '}
            extension, and people flocked in through pure word of mouth—from
            Italy to China, not to mention my home country, Korea, and the US.
          </p>

          <TranslatingQuote
            quotes={[
              {
                text: "La prima volta che ho visitato il sito, ho avuto la sorprendente sensazione di essere catapultato in quel tipo di futuro che ho sempre sognato ma che non ho mai visto realizzato. Ti ringrazio per offrire quest'esperienza così straordinaria!",
                author: 'Alessio',
                language: 'it-IT',
              },
              {
                text: "The first time I visited the site, I had the surprising feeling of being catapulted into that kind of future I've always dreamed of but never seen realized. Thank you for offering such an amazing experience!",
                author: 'Alessio, one of my first Italian users',
                language: 'en-US',
              },
            ]}
          />

          <p>
            I have gathered 2K daily users and sent 1M notifications to this
            day. The open rate was consistently{' '}
            <HighlightPopover
              width='w-lg'
              triggerContent={<i>over 80%</i>}
              popoverTitle='Open Rates & Click Rates'
              popoverContent={
                <>
                  <ChartContainer
                    config={{
                      openRate: {
                        label: 'Open Rate',
                        color: 'hsl(var(--chart-1))',
                      },
                      clickRate: {
                        label: 'Click Rate',
                        color: 'hsl(var(--chart-5))',
                      },
                      Mine: {
                        label: 'Mine',
                        color: 'hsl(var(--chart-1))',
                      },
                      Superb: {
                        label: 'Superb',
                        color: 'hsl(var(--chart-2))',
                      },
                      Decent: {
                        label: 'Decent',
                        color: 'hsl(var(--chart-3))',
                      },
                      Average: {
                        label: 'Average',
                        color: 'hsl(var(--chart-4))',
                      },
                    }}
                  >
                    <BarChart
                      data={[
                        {
                          label: 'Mine',
                          openRate: 80,
                          clickRate: 20,
                          fill: 'hsl(var(--chart-1))',
                        },
                        {
                          label: 'Superb',
                          openRate: 50,
                          clickRate: 10,
                          fill: 'hsl(var(--chart-2))',
                        },
                        {
                          label: 'Decent',
                          openRate: 20,
                          clickRate: 4,
                          fill: 'hsl(var(--chart-3))',
                        },
                        {
                          label: 'Avg',
                          openRate: 15,
                          clickRate: 2,
                          fill: 'hsl(var(--chart-4))',
                        },
                      ]}
                      layout='vertical'
                      margin={{
                        left: 0,
                      }}
                    >
                      <YAxis
                        dataKey='label'
                        type='category'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />
                      <XAxis dataKey='openRate' type='number' hide />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar
                        dataKey='openRate'
                        layout='vertical'
                        radius={5}
                        fill='hsl(var(--chart-1))'
                      />
                      <Bar
                        dataKey='clickRate'
                        layout='vertical'
                        radius={5}
                        fill='hsl(var(--chart-5))'
                      />
                    </BarChart>
                  </ChartContainer>

                  <div className='flex gap-2 font-medium leading-none'>
                    10x the Industry Standard
                    <TrendingUp className='h-4 w-4' />
                  </div>
                  <div className='leading-none text-muted-foreground'>
                    80% open rate (industry average is 20%)
                  </div>
                  <div className='leading-none text-muted-foreground'>
                    20% click rate (industry average is 2%)
                  </div>
                </>
              }
            />{' '}
            every day—almost unheard of in the email business.
          </p>
          <div className='my-4 flex justify-center'>
            <Image
              src='/subscriber-count.png'
              alt='Subscriber count statistics'
              width={600}
              height={400}
              className='rounded-lg shadow-md'
            />
          </div>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            People started requesting features.
          </h2>
          <p>
            Soon, people started to ask me for features, from supporting their
            languages to fine-tuning the translation scripts. But most
            importantly, they wanted summaries on other topics as well. That's
            when I started building the second version of this project, which
            allows natural language search queries. Think of it as Google Alerts
            but with more in-depth research and briefings. Eventually, I built a
            small MVP, went to a hackathon, and became one of the winners. I got
            some AWS credits and a small prize, and things were all smooth
            sailing.
          </p>
          <Card className='overflow-hidden  w-full mx-auto'>
            <YouTubeEmbed
              aspectHeight={9}
              aspectWidth={16}
              id='FtvdWGoLtV0'
              title='MVP'
            />

            <CardContent className='py-2'>
              <p className='text-sm text-muted-foreground text-center'>
                A demo of the MVP version showcased at the hackathon
              </p>
            </CardContent>
          </Card>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            That went only so far.
          </h2>
          <p>
            The problem was that I was really bad at anything other than
            front-end. I didn't know how to use databases, servers, or infra
            stuff. As a university student with primarily front-end experience,
            things weren't working well.
          </p>

          <p>
            Most importantly,{' '}
            <HighlightPopover
              triggerContent='vibe coding'
              popoverTitle='To Be Extra Clear,'
              popoverContent={
                <span className='text-muted-foreground'>
                  I'm not endorsing the lazy practice of throwing everything
                  into an LLM; I'm saying even that <strong>last resort</strong>{' '}
                  didn't exist.
                </span>
              }
            />{' '}
            did not exist back then. Eventually, I was frustrated and left the
            product, doing very minimal life support on it. I left the organic
            2k users and 80% of open rates daily. As you might've guessed, if I
            were anything agile or antifragile, I would've already put this out
            in the market.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            Full-time Work and Advances in Abstraction Layers
          </h2>
          <p>
            I started my full-time work in the Medical MLOps field. This was one
            of a kind, requiring me to be a genuinely full-stack engineer. I
            eventually led a complete rebuild of our MLOps console with RSC with
            all the latest bleeding-edge technology, and I was lucky to have my
            team support me.
          </p>
          <p>
            I learned a lot more about managing the back side, such as the
            Backend, Database, Cloud, Redis, and CI/CD. More importantly, I
            learned how the <i>traditional way of doing the backend</i> is
            becoming increasingly streamlined with the latest products on
            platforms like{' '}
            <span className='inline-flex items-center'>
              <Link
                href='https://neon.tech'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Badge className='inline-flex gap-1 p-1 rounded-sm bg-secondary text-secondary-foreground hover:bg-secondary/80'>
                  <Image src='/neon.png' alt='Neon' width={12} height={12} />
                  Neon
                </Badge>
              </Link>
            </span>
            ,{' '}
            <span className='inline-flex items-center'>
              <Link
                href='https://upstash.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Badge className='inline-flex gap-1 p-1 rounded-sm bg-secondary text-secondary-foreground hover:bg-secondary/80'>
                  <Image
                    src='/upstash.png'
                    alt='Upstash'
                    width={12}
                    height={12}
                  />
                  Upstash
                </Badge>
              </Link>
            </span>
            , and{' '}
            <span className='inline-flex items-center'>
              <Link
                href='https://vercel.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Badge className='inline-flex gap-1 p-1 rounded-sm bg-secondary text-secondary-foreground hover:bg-secondary/80'>
                  <Image
                    src='/vercel.png'
                    alt='Vercel'
                    width={12}
                    height={12}
                  />
                  Vercel
                </Badge>
              </Link>
            </span>
            . I now understand <i>why</i> those are worth the hype and{' '}
            <i>how</i> they are helpful.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            Then I remembered my abandoned brainchild.
          </h2>
          <p>
            I wanted to build it again. Luckily, there are no similar products
            yet. If I want to poll new info on "New Developments in React
            periodically," I need to build tools one by one with tools such as
            n8n or julep. There is no click-click-done SaaS for bespoke AI news
            alerts. So here's the deal: I want to restart the work on this.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            I am going to bootstrap this anyways... But here's how Vercel OSS
            program can help.
          </h2>

          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            I know what it's like to build satisfying interfaces.
          </h3>
          <p>
            Components deliver intent and experience. That's why Vercel's recent
            move on{' '}
            <HighlightPopover
              triggerContent='Vercel is Buying All the Cool Component Libraries'
              popoverTitle='Component Collection'
              popoverContent={
                <span className='text-muted-foreground'>
                  Vercel bought Shadcn, then Tremor. What's next? Bet it's
                  either Origin UI or even Radix themselves. Fun fact, is that I
                  bought Tremor Pro License at $300 just two weeks before the
                  aqucisition, which open-sourced everything, and they never
                  gave me a refund!
                </span>
              }
            />{' '}
            is so interesting. However, due to the lack of proper view
            transitions and stateful navigations, no component libraries match
            iOS-level fluidity. That said, during my process, I want to build
            open-source component libraries for others. This may take months and
            years, but I want to accelerate my ideation and prototyping process
            and give great examples back to the community. Here are some
            components I built, with ergonomics in mind.
          </p>

          <Card className='w-full max-w-md mx-auto'>
            <CardContent className='flex flex-col items-center space-y-6 py-6'>
              <div className='flex flex-row justify-center gap-4 items-center'>
                <ActionButton />

                <FavoriteButton />

                <RefreshButton />
              </div>

              <p className='text-sm text-muted-foreground text-center'>
                Just so satisfying... both visually and performance-wise.
              </p>
            </CardContent>
          </Card>

          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            I know Next.js. Very well.
          </h3>
          <p>
            I know and use the latest bleeding-edge technology, such as RSC, to
            build this. While I cannot disclose the source code of the internal
            web app that I built for my company, it loads 50M data points from
            archives in the Netherlands to Korea in less than a second. I
            doubled down on understanding how Next.js caching works and
            eventually{' '}
            <span>
              <HighlightPopover
                triggerContent='led a project'
                popoverTitle='Remember'
                popoverContent={
                  <span className='text-muted-foreground'>
                    that I'm a new grad, and a junior.
                  </span>
                }
              />
            </span>{' '}
            to rebuild the entire frontend into Next.js 15 App Router for our
            internal web app.
          </p>
          <p>
            While a lot of legacy media websites use Next.js, I can promise no
            single company will know Next.js App Router Cachings and PPRs better
            than I do. Here's a small demo of directory navigation in the
            internal web app I built for my company. We had a bunch of nested
            layers, and we had to navigate them quickly, and eventually, I
            created this spatial cognitive design.
          </p>

          <Card className='overflow-hidden w-full mx-auto'>
            <div className='relative'>
              <Image
                unoptimized
                src='/gifs/sliding-panes.gif'
                width={480}
                height={301}
                alt='Sliding panes demonstration'
                className='w-full'
              />
            </div>
            <CardContent className='py-2'>
              <p className='text-sm text-muted-foreground text-center'>
                Not only ergonomic, but also exceptionally fast. These are dummy
                data (NDA), but prod is on the same speed.
              </p>
            </CardContent>
          </Card>

          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            I am i18n-native. More than anyone.
          </h3>
          <p>
            Based on my previous philosophies, I want to keep this available to
            many people. In the v1 version, most of the costs came from avid
            users in developing regions like South East Asia or Africa. They
            loved the product because they could follow Silicon Valley news at
            near-identical speed as San Franciscans. The reader base is small,
            but it cost me a good chunk of token money, which made me consider
            dropping support. However, I remain committed to making this as
            i18n-native as possible.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            So here's the deal.
          </h2>

          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            I will finish building this by May 6th, and let people sign up.
          </h3>
          <p>
            I understand you'd be concerned that I did not build the app after
            the previous hackathon. But now I know everything better, and more
            importantly, I have better self-discipline. Therefore, if I do not
            finish building the app by the end of May 6th, I will refund your
            money and pass it on to the next candidate or donate it to an OSS
            software of your choice.
          </p>
          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            I will ship subpackages this time.
          </h3>
          <p>
            I mentioned that I handmade a lot of the stacks on v1. This included
            custom scrapers, IP rotators, search engine integrations, summary
            generators, email handling, and more. If you've been following the
            Agentic Framework worlds, you'd immediately notice that most of the
            "layers" have now spun into a whole industry, such as Exa AI,
            Firecrawl, Resend, Kagi Search API, and so much more. While mine was
            rudimentary, I built them earlier than anyone. I didn't ship them
            (which is my fault and my bad.) This time around, while utilizing
            these open market tools, I have so many ideas that I can add to the
            stack, such as{' '}
            <HighlightPopover
              triggerContent='agentic feedback collecting'
              popoverTitle='Agents be like:'
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  <i>
                    Bro just churned after reading this joke, let's send
                    something more nuanced next time.
                  </i>
                </p>
              }
            />
            ,{' '}
            <HighlightPopover
              triggerContent='agentic A/B testing'
              popoverTitle='Agents be like:'
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  <i>
                    Okay so let's try this more nuanced version this time and
                    auto track if the user likes it.
                  </i>
                </p>
              }
            />
            ,{' '}
            <HighlightPopover
              triggerContent='vector-storage personalization memory'
              popoverTitle='Agents be like:'
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  <i>
                    Dang, this bro likes Star Trek references! Let's remember
                    this.
                  </i>
                </p>
              }
            />
            ,{' '}
            <HighlightPopover
              triggerContent='agentic war room'
              popoverTitle='Agents be like:'
              popoverContent={
                <>
                  <p className='text-muted-foreground line-height'>
                    "
                    <i>
                      Emergency!! There's a hot new startup on HN that threatens
                      your business!!!
                    </i>
                  </p>
                  <p className='text-muted-foreground line-height'>
                    Take a look at this{' '}
                    <Link
                      className='text-blue-500'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.indiehackers.com/post/how-to-hack-hacker-news-and-consistently-hit-the-front-page-56b4a04e12#:~:text=Our%20Strategy%3A%20The%20War%20Room'
                    >
                      example
                    </Link>{' '}
                    from Simple Analytics.
                  </p>
                </>
              }
            />{' '}
            and so much more. I will also open-source them and make those
            readily available.
          </p>
          <h3 className={cn('text-2xl font-semibold', dancingScript.className)}>
            Triple-Down Effect
          </h3>
          <p>
            While economists debate the "Trickle-down" effect, I can ensure that
            Sunghyun's new{' '}
            <HighlightPopover
              triggerContent='Triple-Down'
              popoverTitle='Tripling the Sponsorship to my dependencies'
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  I cannot promise this in Legalese, but based on my track
                  record of sponsoring OSS "cuz they're cool," I will spend
                  thrice the amount of money you sponsor me with, across the
                  span of years to come.
                </p>
              }
            />{' '}
            economics will definitely work. I already{' '}
            <Link
              href='https://github.com/anaclumos?tab=sponsoring'
              className='inline-flex items-center text-blue-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              sponsor
            </Link>{' '}
            more open-source projects than many of the companies just cuz I
            think they're cool. If you sponsor me with this project, I will for
            sure triple the amount and pass it down to the subdependencies of my
            journey.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            So...
          </h2>
          <p>
            I understand that I am in a unique position, making it hard for
            Vercel to support me. This is more of my manifesto instead of an
            appeal. It is a journal and a record for me to discipline myself and
            put myself back into builder mode. So, I hope you enjoyed reading my
            anti-agile manifesto.
          </p>
          <p>Sincerely,</p>
          <span
            className={`${dancingScript.className} text-3xl text-foreground inline-block pt-6`}
          >
            Sunghyun Cho
          </span>
        </CardContent>
      </Card>
    </article>
  )
}
