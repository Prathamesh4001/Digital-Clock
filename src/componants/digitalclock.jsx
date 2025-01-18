import React, { useState, useEffect } from "react";

export const Digitalclock = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
  }, []);

  
  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
     
      <button type="button"
        onClick={toggleFormat}
        className="mb-6 px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
      >
        {is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour"}
      </button>

      
      <div className="bg-white text-gray-800 rounded-lg shadow-md px-8 py-6 text-center">
       
        <div className="flex justify-between text-gray-500 mb-2 text-sm">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
        
        <div className="text-4xl font-bold">
          {time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !is24HourFormat,
          })}
        </div>
        
        {!is24HourFormat && <div className="text-gray-500 text-sm">{time.getHours() >= 12 ? "PM" : "AM"}</div>}
      </div>
    </div>
  );
};


