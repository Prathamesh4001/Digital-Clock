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

 
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

 
  const currentDayIndex = time.getDay(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500 text-white">
     
      <h1 className="text-4xl font-extrabold mb-4 ">
        Digital Clock
      </h1>

      
      <button type="button"
        onClick={toggleFormat}
        className="mb-6 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        {is24HourFormat ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format"}
      </button>

      
      <div className="bg-white text-gray-800 rounded-lg shadow-lg px-12 py-8 text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
       
        <div className="flex justify-between gap-4 text-gray-500 mb-4 text-lg uppercase tracking-wide ">
          {daysOfWeek.map((day, index) => (
            <span key={day}
              
              className={`${
                currentDayIndex === (index + 1)  ? "underline text-black" : ""
              } hover:text-black`}
            >
              {day}
            </span>
          ))}
        </div>

       
        <div className="text-6xl font-extrabold tracking-wide">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !is24HourFormat,
          })}
        </div>

        
        {/* {!is24HourFormat && (
          <div className="text-gray-600 text-lg mt-2">
            {time.getHours() >= 12 ? "PM" : "AM"}
          </div>
        )} */}

        
        <div className="text-gray-500 text-sm mt-4">
          {time.toLocaleDateString([], {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};