"use client";

import { createContext, PropsWithChildren } from "react";

export const IsAuthContext = createContext<boolean | string>(false);

interface Props extends PropsWithChildren {
  isAuth: boolean | string;
}

export const Providers = (props: Props) => {
  return (
    <IsAuthContext.Provider value={props.isAuth}>
      {props.children}
    </IsAuthContext.Provider>
  );
};
