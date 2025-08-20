
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

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{city.name}</h2>
          <p className="text-sm text-slate-400">{timezoneAbbr}</p>
        </div>
      </div>
      <div className="flex items-baseline justify-center my-4">
        <p className="text-6xl font-mono font-extrabold tracking-widest bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          {timeValue}
        </p>
        <p className="text-2xl font-mono text-slate-300 ml-2">
          {amPm}
        </p>
      </div>
      <div className="text-center text-slate-400 text-md">
        <p>{dateString}</p>
      </div>
    </div>
  );
};

export default ClockCard;
