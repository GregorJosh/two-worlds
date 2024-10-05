"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IPlayerContext {
  url: string | null;
  setURL: Dispatch<SetStateAction<string | null>>;
}

const PlayerContext = createContext<IPlayerContext>({
  url: null,
  setURL: () => undefined,
});

export const PlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [url, setURL] = useState<string | null>(null);

  console.log("Changing player url prop for: " + url);

  return (
    <PlayerContext.Provider value={{ url, setURL }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
