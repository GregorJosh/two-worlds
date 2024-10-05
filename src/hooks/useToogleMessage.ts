import { useState } from "react";

export const useToggleMessage = (duration = 3000) => {
  const [message, setMessage] = useState<string>("");

  const showMessage = (newMessage: string): void => {
    setMessage(newMessage);
    setTimeout(() => setMessage(""), duration);
  };

  return [message, showMessage] as const;
};
