'use client'

import { motion } from 'motion/react'
import { useRef, useState } from 'react'

// Magic moving word scrambling component with fixed states
const MagicMoveWord = ({
  scrambledWord,
  correctWord,
}: { scrambledWord: string; correctWord: string }) => {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate letter width based on container and word length
  const letterWidth = 20 // px
  const letterSpacing = 5 // px
  const totalWidth = correctWord.length * (letterWidth + letterSpacing)

  // Calculate starting position to center the word
  const startX =
    (totalWidth - correctWord.length * (letterWidth + letterSpacing)) / 2

  // Create mapping between scrambled and correct positions
  const getPositionMap = () => {
    const map: Record<number, number> = {}

    // For each letter in the correct word, find its position in the scrambled word
    for (let i = 0; i < correctWord.length; i++) {
      const letter = correctWord[i]

      // Find this letter in the scrambled word
      for (let j = 0; j < scrambledWord.length; j++) {
        if (scrambledWord[j] === letter && map[j] === undefined) {
          map[j] = i
          break
        }
      }
    }

    return map
  }

  const positionMap = getPositionMap()

  return (
    <div
      ref={containerRef}
      className='inline-block cursor-pointer mx-1 px-3 py-2 bg-gray-100 rounded-md flex items-center justify-center'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        width: `${totalWidth + 20}px`,
        height: '40px',
        position: 'relative',
      }}
    >
      <div className='relative w-full h-full flex items-center justify-center'>
        {scrambledWord.split('').map((letter, scrambledIndex) => {
          // Get the position in the correct word
          const correctIndex = positionMap[scrambledIndex] || scrambledIndex

          // Calculate positions (centered)
          const scrambledX =
            startX + scrambledIndex * (letterWidth + letterSpacing)
          const correctX = startX + correctIndex * (letterWidth + letterSpacing)

          return (
            <motion.div
              key={correctIndex}
              className='absolute flex items-center justify-center text-lg font-medium'
              initial={false}
              style={{
                width: `${letterWidth}px`,
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: '50%',
                marginTop: '-15px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '4px',
              }}
              animate={{
                left: isHovering ? `${correctX}px` : `${scrambledX}px`,
                scale: isHovering ? [1, 1.2, 1] : 1,
                color: isHovering ? '#000000' : '#666666',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  scale: {
                    duration: 0.3,
                    times: [0, 0.5, 1],
                    ease: 'easeInOut',
                  },
                },
              }}
            >
              {letter}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default MagicMoveWord
