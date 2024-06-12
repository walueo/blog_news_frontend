'use client'

import { useState } from 'react'
import { Article } from '@/types'

interface HeroSliderProps {
  articles: Article[]
}


const HeroSlider = ({ articles }: HeroSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + articles.length) % articles.length)
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % articles.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
      <div className="h-96">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">{article.headline}</h2>
              <p className="text-lg mb-4">{article.subheadline}</p>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider