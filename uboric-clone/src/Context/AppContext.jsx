import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  <AppContext.Provider>{children}</AppContext.Provider>;
}
