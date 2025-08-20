import React, { useState, useEffect } from 'react';

const ClockCard = ({ city }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const timeStringParts = time.toLocaleTimeString('en-US', {
    timeZone: city.timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).split(' ');

  const timeValue = timeStringParts[0];
  const amPm = timeStringParts[1];

  const dateString = time.toLocaleDateString('en-US', {
    timeZone: city.timezone,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  
  const timezoneAbbr = new Intl.DateTimeFormat('en-US', {
      timeZone: city.timezone,
      timeZoneName: 'short',
  }).formatToParts(time).find(part => part.type === 'timeZoneName')?.value;

  return React.createElement('div', { className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-4 border-cyan-600/50 hover:border-cyan-500 transform hover:scale-105 transition-all duration-300 ease-in-out" },
    React.createElement('div', { className: "flex justify-between items-start mb-4" },
      React.createElement('div', null,
        React.createElement('h2', { className: "text-2xl font-bold text-white" }, city.name),
        React.createElement('p', { className: "text-sm text-slate-400" }, timezoneAbbr)
      )
    ),
    React.createElement('div', { className: "flex items-baseline justify-center my-4" },
      React.createElement('p', { className: "text-6xl font-mono font-extrabold tracking-widest bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text" },
        timeValue
      ),
      React.createElement('p', { className: "text-2xl font-mono text-slate-300 ml-2" },
        amPm
      )
    ),
    React.createElement('div', { className: "text-center text-slate-400 text-md" },
      React.createElement('p', null, dateString)
    )
  );
};

export default ClockCard;