"use client";

import { useEffect, useState } from "react";

export const MessageBox = ({
  message,
  duration = 3000,
}: {
  message: string;
  duration?: number;
}): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => setIsVisible(false), duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, duration]);

  return <>{isVisible ? <p>{message}</p> : null}</>;
};
