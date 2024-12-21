'use client'
import { useState, useEffect } from 'react'

export default function ArraysQuizPage() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let retries = 0;
    const maxRetries = 3;

    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions', {
          method: 'GET',
          cache: 'no-store'
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch questions')
        }

        const { data } = await response.json()
        setQuestions(data)
        setError(null)
      } catch (error) {
        console.error('Error fetching questions:', error)
        setError('Failed to load questions')
        
        // Retry logic
        if (retries < maxRetries) {
          retries++
          setRetryCount(retries)
          setTimeout(fetchQuestions, 1000 * retries) // Exponential backoff
        }
      }
    }

    fetchQuestions()
  }, []) // Empty dependency array means this runs once on mount

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <p className="text-white text-center">
          {error} {retryCount < 3 ? `(Retry attempt ${retryCount}/3)` : ''}
        </p>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <p className="text-white text-center">Loading questions...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-md mx-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-white/80 hover:text-white">
            ✕
          </button>
          <div className="bg-white/10 rounded-full px-4 py-1 text-white">
            {currentQuestionIndex + 1}
          </div>
          <div className="text-white flex items-center gap-1">
            <span>♥</span>
            <span>3</span>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="text-white/60 text-sm mb-2 text-center">
            question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <h2 className="text-white text-2xl text-center mb-8">
            {currentQuestion?.question}
          </h2>

          {/* Answer options */}
          <div className="space-y-3">
            {currentQuestion?.options?.map((option, index) => (
              <button
                key={index}
                className={`w-full p-4 rounded-2xl text-left font-medium text-lg
                  ${index === 1 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'}
                  transition-colors`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mb-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className={`text-white px-4 py-2 rounded-lg
              ${currentQuestionIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className={`text-white px-4 py-2 rounded-lg
              ${currentQuestionIndex === questions.length - 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-800'}`}
          >
            Next
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex justify-between gap-2">
          <div className="bg-orange-500 rounded-xl p-3 text-white flex-1 text-center">
            <div className="font-bold">50/60</div>
            <div className="text-xs text-white/80">answers</div>
          </div>
          <div className="bg-orange-500 rounded-xl p-3 text-white flex-1 text-center">
            <div className="font-bold">👥</div>
            <div className="text-xs text-white/80">friends</div>
          </div>
          <div className="bg-orange-500 rounded-xl p-3 text-white flex-1 text-center">
            <div className="font-bold">⏱</div>
            <div className="text-xs text-white/80">time</div>
          </div>
          <div className="bg-orange-500 rounded-xl p-3 text-white flex-1 text-center">
            <div className="font-bold">➜</div>
            <div className="text-xs text-white/80">skip</div>
          </div>
        </div>
      </div>
    </main>
  )
} 