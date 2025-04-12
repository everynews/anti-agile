'use client'

import HighlightPopover from '@/components/highlight-popover'
import MagicMoveWord from '@/components/magic-move-word'
import { ThemeToggle } from '@/components/theme-toggle'
import { TranslatingQuote } from '@/components/translating-quote'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { Badge } from '@/components/ui/badge'
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
import { TrendingUp } from 'lucide-react'
import { Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

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
              className={`${dancingScript.className} text-4xl text-foreground -rotate-1.5 inline-block`}
            >
              Dear Vercel, I'll quit being Anti-Agile
            </span>
            <div className='flex items-center gap-2'>
              <ThemeToggle />
            </div>
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
                <p className='text-muted-foreground'>
                  Antifragility is the idea that you can thrive in adversity and
                  grow stronger from challenges. Turning the tides, extracting
                  opportunity from danger.
                </p>
              }
            />
            . I did quite the opposite. I turned a great opportunity into a
            lagging product. In a way, I <i>flipped</i> the order.
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
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
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
                    was a bad idea.
                  </h4>
                }
                popoverContent={
                  <p className='text-muted-foreground line-height'>
                    <i>Artifact</i> was a personalized news app developed by
                    Instagram co-founders Kevin Systrom and Mike Krieger. The
                    more you engage with the app, the better it becomes at
                    surfacing relevant content. However,{' '}
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
                      feeds, with algorithm steering your attention.
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
                        The future is already here. It's just not very evenly
                        distributed.
                      </i>
                    </h4>
                  </Link>
                }
                popoverContent={
                  <p className='text-muted-foreground line-height'>
                    For example, my friends in the US learned about GPT-4o Image
                    Gen in late March, whereas my Korean friends leared about it
                    in early April. Being AI-native, I wanted to fix that.
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
            crude agent that runs a cron job on most popular HN stories,
            translates that into{' '}
            <HighlightPopover
              triggerContent='30 different languages'
              popoverTitle="This wasn't an arbitrary choice"
              popoverContent={
                <p className='text-muted-foreground line-height'>
                  Non-latin LLM tokens are expensive, so blindly following
                  pre-LLM standards like BCP 47 or Ethnologue 200 was not an
                  option. I ended up doing some heavy demographical analysis.
                  and eventually came up with this list. By my own math, 99.9%
                  of the global population will read one of this 30 language
                  natively or fluently.
                </p>
              }
            />
            . This was still an infancy era of agentic web access of some sort,
            so I built lots of layers like giving recursive feedbacks to agent,
            error handling, agentic web crawling, doing simple RAG, albeit my
            version was a very rudimentary ones.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            The reactions were simply amazing.
          </h2>

          <p>
            I made almost no effort in public relations, except for a small URL
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
                    Microsoft sent a cease and desist letter to me
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
            extension, and by pure word of mouth, people flocked in. From Italy
            to China, not to mention my home ground, Korea and the US.
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
                author: 'Alessio, one of our first Italian subscribers',
                language: 'en-US',
              },
            ]}
          />
          <p>
            To this day, I have gathered 2K daily readers and sent 1M emails so
            far. Every day, the open rate was consistently{' '}
            <HighlightPopover
              width='w-lg'
              triggerContent={<i>over 80%</i>}
              popoverTitle='If you know newsletter marketing, these numbers are exceptional.'
              popoverContent={
                <Card>
                  <CardHeader>
                    <CardTitle>Open Rates & Click Rates</CardTitle>
                    <CardDescription>
                      Compared to Industry Standards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                            label: 'Average',
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
                  </CardContent>
                  <CardFooter className='flex-col items-start gap-2 text-sm'>
                    <div className='flex gap-2 font-medium leading-none'>
                      Exceeding industry standards by 300%{' '}
                      <TrendingUp className='h-4 w-4' />
                    </div>
                    <div className='leading-none text-muted-foreground'>
                      50-80% open rate vs industry average of 20%
                    </div>
                    <div className='leading-none text-muted-foreground'>
                      20% click rate vs industry average of 1-2%
                    </div>
                  </CardFooter>
                </Card>
              }
            />
            —something almost unheard of in the newsletter business.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            People started requesting features.
          </h2>
          <p>
            Soon, people started to ask me features, from supporting their
            languages and fine-tuning the translation scripts. But most
            importantly, they wanted summaries on other topics as well. That's
            when I started building the second version of this project, which
            allows natural language search queries. Think of it as{' '}
            <i>Google Alerts</i> but with more in-depth research and briefings.
            I eventually built a small MVP and went to a hackathon, and became
            one of the winners. I got some AWS credits and a small prize, and
            things were all smooth sailing.
          </p>
          <Card className='overflow-hidden max-w-md w-full mx-auto'>
            <LiteYouTubeEmbed
              aspectHeight={9}
              aspectWidth={16}
              id='FtvdWGoLtV0'
              title='MVP'
            />
            <CardContent className='py-2'>
              <p className='text-sm text-muted-foreground text-center'>
                Demo of the MVP version showcased at the hackathon
              </p>
            </CardContent>
          </Card>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            That went only so far.
          </h2>
          <p>
            The problem was I was really bad at anything other than front-end. I
            didn't know literally anything. No knowledge on how to use
            databases, servers, or any of the infra stuff. As a university
            student with primarily front-end experiences, things weren't working
            out well.
          </p>

          <p>
            Most importantly,{' '}
            <HighlightPopover
              triggerContent='vibe coding'
              popoverTitle='Last Resort'
              popoverContent={
                <>
                  I'm not endorsing the lazy practice of throwing everything
                  into an LLM; I'm saying even that <strong>last resort</strong>{' '}
                  didn't exist.
                </>
              }
            />{' '}
            did not exist back then. Eventually, I was frustrated and then left
            out the product, doing very minimal life support on the products.
            Leaving the organic 2k users and 80% of open rates daily. As you
            might've guessed, If I were anything agile or antifragile, I
            would've already got this out in the market.
          </p>

          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            Full-time Work and Programming Agentic Tools Then,
          </h2>
          <p>
            I started my full-time work in the Medical MLOps field. This was one
            of a kind, requiring me to be a truly full-stack engineer. I
            eventually led a complete rebuild of our MLOps console with RSC with
            all the latest bleeding-edge technology, and I was lucky to have my
            team support me.
          </p>
          <p>
            I learned a lot more about managing the back side, like Backend,
            Database, Cloud, Redis, CI/CD, and more importantly, how the{' '}
            <i>traditional way of doing backend</i> is being more and more
            streamlined with the latest products on platforms like{' '}
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
            . I now have an understanding of <i>why</i> those are worth the hype
            and <i>how</i> they are helpful.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            Then I remembered my abandoned brainchild.
          </h2>
          <p>
            I wanted build it again. Luckily, there are no such similar products
            yet. If I want to poll new info on "New Developments in React
            periodically," I need to build tools one by one with tools such as
            n8n or julep. There is no click-click-done SaaS for bespoke AI news
            alerts. So here's the deal. I want to restart the work on this.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            I am going to bootstrap this anyways.
          </h2>
          <p>
            But here's how Vercel OSS program can help.
            <ul className='list-disc pl-6 space-y-2 mt-2'>
              <li>
                Based on my previous philosophies, I want to keep this available
                to as many people as possible. In the v1 version, most of the
                costs came from avid users in developing regions, such as South
                East Asia or Africa. They loved the product because they could
                follow Silicon Valley news at near-identical speed as San
                Franciscans. The reader base is small but cost me a good chunk
                of token money, which made me consider dropping support.
                However, I remain committed to making this as i18n-native as
                possible.
              </li>
              <li>
                I know and use the latest bleeding-edge technology, such as RSC,
                to build this. While I cannot disclose the source code internal
                web app that I built for my company, it loads 50M datapoints in
                less than a second. I doubled down on understanding how Next.js
                caching works and eventually led a whole project to build a
                caching layer for the internal web app. While there are news
                outlets that use Next.js, I can promise no single company will
                know Next.js App Router Cachings and PPRs better than me.
              </li>
              <li>
                I care about pixel-perfect and satisfying interfaces and
                innovative UI/UX. I want to accelerate my ideation and
                prototyping process, and give great examples of how to do it.
                Here's a small demo of directory navigation in my company's
                internal web app I built. We had bunch of nested layers and we
                had to navigate them quickly, and eventually I created this
                spacial cognitive design. I think Vercel will like my work in
                the end.
              </li>
            </ul>
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            So here's the deal.
          </h2>
          <p>
            <ul className='list-disc pl-6 space-y-2 mt-2'>
              <li>
                <strong>
                  I will finish building this by May 6th, and let people sign
                  up.
                </strong>
                I understand you'd be concerned that I previously did not build
                the app after winning a hackathon. But now I have better
                understanding around everything and more importantly, I have
                better self-discipline. Therefore, if I do not finish building
                the app by the end of May 6th, I will refund your money and pass
                it to the next candidate.
              </li>
              <li>
                <strong>I will give more back to the community.</strong>{' '}
                <Link
                  href='https://github.com/anaclumos?tab=sponsoring'
                  className='inline-flex items-center text-blue-500'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  I already sponsor more open-source projects than many of the
                  companies
                </Link>
                , only because I think they're cool. If you sponsor me with this
                project, I will double down and even expand my current GitHub
                Sponsor & new dependencies.
              </li>
            </ul>
          </p>
          <p>
            I totally understand I am in a unique position that makes it hard
            for Vercel to support me. I totally understand that. This is more of
            my personal manifesto instead of an appeal. A journal, and a record
            for me to discipline myself to put myself back into builder mode. So
            if anything, I hope you enjoyed reading my anti-agile manifesto.
          </p>
          <h2
            className={`${dancingScript.className} text-3xl text-foreground inline-block`}
          >
            Sunghyun Cho
          </h2>
        </CardContent>
      </Card>
    </div>
  )
}
