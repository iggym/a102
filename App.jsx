import React from 'react';
import { CITIES } from './constants.js';
import ClockCard from './components/ClockCard.jsx';

const App = () => {
  return React.createElement('div', { className: "bg-slate-900 min-h-screen text-white font-sans" },
    React.createElement('header', { className: "py-8 md:py-12 text-center" },
      React.createElement('h1', { className: "text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text" },
        "US Cities World Clock"
      ),
      React.createElement('p', { className: "text-slate-400 mt-2" }, "Real-time clocks for major US timezones")
    ),
    React.createElement('main', { className: "container mx-auto px-4 pb-12" },
      React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
        CITIES.map((city) => React.createElement(ClockCard, { key: city.name, city: city }))
      )
    ),
    React.createElement('footer', { className: "text-center py-6 text-slate-500 text-sm" },
      React.createElement('p', null, "Built with React & Tailwind CSS")
    )
  );
};

export default App;
