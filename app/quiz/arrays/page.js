'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ArraysQuizPage() {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answerStatus, setAnswerStatus] = useState(null) // 'correct' or 'wrong'
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
            setSelectedAnswer(null)
            setAnswerStatus(null)
        }
    }

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1)
            setSelectedAnswer(null)
            setAnswerStatus(null)
        }
    }

    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option)
        const isCorrect = option === currentQuestion?.correctAnswer
        setAnswerStatus(isCorrect ? 'correct' : 'wrong')
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
        <main className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8">
            <div className="max-w-xl mx-auto min-h-[600px] flex flex-col">
                {/* Top bar */}
                <div className="flex justify-between items-center mb-6">
                    <Link
                        href="/quiz"
                        className="text-white/60 hover:text-white"
                    >
                        ← Back
                    </Link>
                    <div className="bg-white/10 rounded-full px-4 py-1 text-white">
                        {currentQuestionIndex + 1}
                    </div>
                    <div className="text-white flex items-center gap-1">
                        <span>♥</span>
                        <span>3</span>
                    </div>
                </div>

                {/* Question Section - Fixed height */}
                <div className="flex-1 flex flex-col">
                    <div className="text-white/60 text-sm mb-2 text-center">
                        question {currentQuestionIndex + 1} of {questions.length}
                    </div>
                    <h2 className="text-white text-xl sm:text-2xl text-center mb-8">
                        {currentQuestion?.question}
                    </h2>

                    {/* Answer options - Fixed height container */}
                    <div className="flex-1 flex flex-col justify-center mb-4">
                        <div className="space-y-3 max-w-md mx-auto w-full">
                            {currentQuestion?.options?.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerSelect(option)}
                                    className={`w-full p-3 sm:p-4 rounded-2xl text-left font-medium text-base sm:text-lg
                                        ${selectedAnswer === option
                                            ? (option === currentQuestion.correctAnswer
                                                ? 'bg-green-500 text-white'
                                                : 'bg-red-500 text-white')
                                            : 'bg-gray-800 text-white hover:bg-gray-700'}
                                        transition-colors`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        {/* Answer feedback - Always visible container with fixed height */}
                        <div className="h-12 flex items-center justify-center mt-4">
                            {answerStatus && (
                                <div className={`text-lg font-medium
                                    ${answerStatus === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
                                    {answerStatus === 'correct' ? 'Correct!' : 'Wrong answer'}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation and Stats - Fixed at bottom */}
                    <div className="mt-auto">
                        {/* Navigation buttons */}
                        <div className="flex justify-between mb-6">
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
                        <div className="grid grid-cols-4 gap-2">
                            <div className="bg-orange-500 rounded-xl p-2 sm:p-3 text-white text-center">
                                <div className="font-bold text-sm sm:text-base">50/60</div>
                                <div className="text-[10px] sm:text-xs text-white/80">answers</div>
                            </div>
                            <div className="bg-orange-500 rounded-xl p-2 sm:p-3 text-white text-center">
                                <div className="font-bold text-sm sm:text-base">👥</div>
                                <div className="text-[10px] sm:text-xs text-white/80">friends</div>
                            </div>
                            <div className="bg-orange-500 rounded-xl p-2 sm:p-3 text-white text-center">
                                <div className="font-bold text-sm sm:text-base">⏱</div>
                                <div className="text-[10px] sm:text-xs text-white/80">time</div>
                            </div>
                            <div className="bg-orange-500 rounded-xl p-2 sm:p-3 text-white text-center">
                                <div className="font-bold text-sm sm:text-base">➜</div>
                                <div className="text-[10px] sm:text-xs text-white/80">skip</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 