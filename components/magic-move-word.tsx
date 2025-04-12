'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

interface MagicMoveWordProps {
  scrambledWord: string
  correctWord: string
}

type MappedChar = {
  char: string
  scrambledIndex: number | null // Where this char is in the scrambled word (if it existed)
  correctIndex: number | null // Where this char is in the correct word (if it exists)
}

/**
 * Build a list of all characters that appear in the scrambled or correct words,
 * matching them where possible. If a char does not match, it becomes "extra" or "new".
 */
function buildMapping(scrambled: string, correct: string): MappedChar[] {
  const sArr = scrambled.split('')
  const cArr = correct.split('')

  // Keep track of which correct positions have been used
  const used = new Set<number>()

  const result: MappedChar[] = []

  // 1) Match each scrambled char to the first unused identical char in correct
  for (let i = 0; i < sArr.length; i++) {
    const sChar = sArr[i]
    let matchedIndex = -1
    for (let j = 0; j < cArr.length; j++) {
      if (!used.has(j) && cArr[j] === sChar) {
        matchedIndex = j
        used.add(j)
        break
      }
    }
    if (matchedIndex >= 0) {
      // matched char
      result.push({
        char: sChar,
        scrambledIndex: i,
        correctIndex: matchedIndex,
      })
    } else {
      // no match => "extra" char
      result.push({
        char: sChar,
        scrambledIndex: i,
        correctIndex: null,
      })
    }
  }

  // 2) Add any "new" chars from correct that had no match
  for (let j = 0; j < cArr.length; j++) {
    if (!used.has(j)) {
      result.push({
        char: cArr[j],
        scrambledIndex: null,
        correctIndex: j,
      })
    }
  }

  return result
}

export default function MagicMoveWord({
  scrambledWord,
  correctWord,
}: MagicMoveWordProps) {
  const [isScrambled, setIsScrambled] = useState(true)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  // Build our mapping of characters (matched, extra, or new)
  const mappedChars = buildMapping(scrambledWord, correctWord)

  // Basic letter styling
  const letterWidth = 20
  const letterSpacing = 5

  // Calculate *separate* widths
  const scrambledWidth = scrambledWord.length * (letterWidth + letterSpacing)
  const correctWidth = correctWord.length * (letterWidth + letterSpacing)

  const handleClick = () => {
    setIsScrambled((prev) => !prev)
    if (!hasBeenOpened) {
      setHasBeenOpened(true)
    }
  }

  return (
    <div
      className='inline-flex items-center justify-center bg-gray-50 rounded p-2 relative cursor-pointer select-none'
      style={{ width: '100%', height: 60 }}
      onClick={handleClick}
      onKeyUp={handleClick}
    >
      {/* Pulsing red dot if not opened */}
      {!hasBeenOpened && (
        <span className='absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse' />
      )}

      {/* 
          Instead of a static width, we animate from the scrambled width
          to the correct width. 
      */}
      <motion.div
        className='relative'
        style={{ height: 40 }}
        initial={{ width: scrambledWidth }}
        animate={{ width: isScrambled ? scrambledWidth : correctWidth }}
        transition={{ type: 'spring', stiffness: 500, damping: 100 }}
      >
        {mappedChars.map((item, index) => {
          const { char, scrambledIndex, correctIndex } = item

          // Positions for scrambled vs correct
          const fromX =
            scrambledIndex !== null
              ? scrambledIndex * (letterWidth + letterSpacing)
              : // if it's a NEW char, start near the final X but invisible
                (correctIndex ?? 0) * (letterWidth + letterSpacing)

          const toX =
            correctIndex !== null
              ? correctIndex * (letterWidth + letterSpacing)
              : fromX // if it's an EXTRA char, same X -> fade out

          // "extra" chars => fade out on click
          const isExtra = correctIndex === null
          // "new" chars => fade in on click
          const isNew = scrambledIndex === null

          return (
            <motion.div
              key={`${index}-${char}`}
              className='absolute flex items-center justify-center text-lg font-medium'
              style={{
                top: '50%',
                left: fromX,
                width: letterWidth,
                height: 30,
                marginTop: -15,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
              initial={
                isNew
                  ? { opacity: 0, scale: 0.7 } // new chars start invisible
                  : { opacity: 1, scale: 1 }
              }
              animate={
                !isScrambled
                  ? {
                      left: toX,
                      opacity: isExtra ? 0 : 1,
                      scale: isExtra ? 0.5 : 1,
                    }
                  : {
                      left: fromX,
                      opacity: isNew ? 0 : 1,
                      scale: isNew ? 0.7 : 1,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              {char}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
