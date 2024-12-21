import Link from 'next/link';

export default function Quiz() {
  const dsaTopics = [
    {
      title: 'Arrays & Strings',
      description: 'Practice questions on array manipulation and string algorithms',
      icon: '📊',
      href: '/quiz/arrays',
      bgColor: 'from-pink-900/80 to-rose-800/80'
    },
    {
      title: 'Stacks & Queues',
      description: 'Master fundamental data structures for LIFO and FIFO operations',
      icon: '🔄',
      href: '/quiz/stacks-queues',
      bgColor: 'from-blue-900/80 to-cyan-800/80'
    },
    {
      title: 'Linked Lists',
      description: 'Explore singly and doubly linked list problems',
      icon: '⛓️',
      href: '/quiz/linked-lists',
      bgColor: 'from-violet-900/80 to-purple-800/80'
    },
    {
      title: 'Trees & BST',
      description: 'Binary trees, BST, and tree traversal algorithms',
      icon: '🌳',
      href: '/quiz/trees',
      bgColor: 'from-green-900/80 to-emerald-800/80'
    },
    {
      title: 'Graphs',
      description: 'Graph algorithms, DFS, BFS, and shortest paths',
      icon: '🕸️',
      href: '/quiz/graphs',
      bgColor: 'from-amber-900/80 to-orange-800/80'
    },
    {
      title: 'Dynamic Programming',
      description: 'Solve optimization problems using DP approaches',
      icon: '🎯',
      href: '/quiz/dynamic-programming',
      bgColor: 'from-red-900/80 to-rose-800/80'
    },
    {
      title: 'Sorting & Searching',
      description: 'Common sorting algorithms and binary search variations',
      icon: '🔍',
      href: '/quiz/sorting-searching',
      bgColor: 'from-teal-900/80 to-cyan-800/80'
    },
    {
      title: 'Heap & Hash Tables',
      description: 'Priority queues, hash maps, and their applications',
      icon: '📦',
      href: '/quiz/heap-hash',
      bgColor: 'from-indigo-900/80 to-blue-800/80'
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Practice Quiz
          </h1>
          <p className="text-gray-400 text-lg">
            Select a topic to start practicing
          </p>
        </header>

        <div className="space-y-4">
          {dsaTopics.map((topic) => (
            <Link 
              href={topic.href} 
              key={topic.title}
              className={`block p-6 rounded-2xl bg-gradient-to-r ${topic.bgColor} 
                hover:scale-[1.02] transition-all duration-200 border border-gray-800`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{topic.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {topic.title}
                  </h2>
                  <p className="text-gray-200/80 text-sm">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span>←</span> Back to main menu
          </Link>
        </div>
      </div>
    </main>
  );
}