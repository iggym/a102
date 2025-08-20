
import React from 'react';
import { CITIES } from './constants';
import ClockCard from './components/ClockCard';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <header className="py-8 md:py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          US Cities World Clock
        </h1>
        <p className="text-slate-400 mt-2">Real-time clocks for major US timezones</p>
      </header>
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES.map((city) => (
            <ClockCard key={city.name} city={city} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
