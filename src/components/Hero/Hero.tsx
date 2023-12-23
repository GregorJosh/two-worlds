'use client'

import { JSX, useRef, useEffect, RefObject } from "react";

export const Hero = (): JSX.Element => {
  const divRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (typeof window !== "undefined") {
      console.log(window);
    }
  }, []);

  return <div ref={divRef}></div>;
};
