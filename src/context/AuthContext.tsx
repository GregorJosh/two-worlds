"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext<boolean>(false);

export const AuthProvider = ({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: React.ReactNode;
}): React.JSX.Element => {
  return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
