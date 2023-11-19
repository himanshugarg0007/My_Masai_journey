import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
    let [login, setlogin] = useState(false);
    return (
      <LoginContext.Provider value={{ login, setlogin }}>
        {children}
      </LoginContext.Provider>
    );
  }