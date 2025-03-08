"use client";

import { useEffect, useState } from "react";

interface ClockProps {
  className?: string;
  format24Hour?: boolean;
}

export const Clock: React.FC<ClockProps> = ({
  className = "",
  format24Hour = false,
}) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date): string => {
    const hours = format24Hour ? date.getHours() : date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = format24Hour ? "" : date.getHours() >= 12 ? " PM" : " AM";

    return `${hours}:${minutes}:${seconds}${ampm}`;
  };

  return (
    <time
      className={`font-mono text-sm text-muted-foreground ${className}`}
      dateTime={time.toISOString()}
      aria-label="Current time"
    >
      {formatTime(time)}
    </time>
  );
};

export default Clock;
