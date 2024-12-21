import Link from 'next/link';

export default function Home() {
  const learningPaths = [
    {
      title: 'Practice Quiz',
      description: 'Test your knowledge with quizzes',
      icon: '📝',
      href: '/quiz',
      bgColor: 'from-pink-400 to-rose-400'
    },
    {
      title: 'Terminal Practice',
      description: 'Master command line operations',
      icon: '💻',
      href: '/terminal',
      bgColor: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Coding Problems',
      description: 'Solve programming challenges and practice algorithms',
      icon: '🔧',
      href: '/programs',
      bgColor: 'from-violet-400 to-purple-400'
    },
    {
      title: 'Documentation',
      description: 'Study key concepts and technical documentation',
      icon: '📚',
      href: '/docs',
      bgColor: 'from-amber-400 to-orange-400'
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
          Interview Prep Hub
          </h1>
          <p className="text-gray-400 text-lg">
          Your one-stop platform for technical interview preparation
          </p>
        </header>

        <div className="space-y-4">
          {learningPaths.map((path) => (
            <Link 
              href={path.href} 
              key={path.title}
              className={`block p-6 rounded-2xl bg-gradient-to-r ${path.bgColor} 
                hover:scale-[1.02] transition-all duration-200 shadow-xl`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{path.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {path.title}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {path.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
