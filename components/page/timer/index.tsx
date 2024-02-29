import React, { useState, useEffect } from "react";

function VisitTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Determine the label for the time unit
  let timeLabel = remainingSeconds === 1 ? "second" : "seconds";
  if (minutes > 0) {
    timeLabel = minutes === 1 ? "minute" : "minutes";
  }
  if (hours > 0) {
    timeLabel = hours === 1 ? "hour" : "hours";
  }

  // Format time for display
  const formattedTime =
    hours > 0
      ? `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
          remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`
      : `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;

  return (
    <span className="text-green-400">
      {formattedTime} {timeLabel}
    </span>
  );
}

export default VisitTimer;
