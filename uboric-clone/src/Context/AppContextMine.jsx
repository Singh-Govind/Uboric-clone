import { useState } from "react";
import { createContext } from "react";

export const AppContextMine = createContext();

export default function AppContextMineProvider({ children }) {
  const [num, setNum] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  const setNumber = () => {
    setNum(num + 1);
  };

  return (
    <AppContextMine.Provider
      value={{
        num,
        setNumber,
        totalPrice,
        setTotalPrice,
        searchItem,
        setSearchItem,
      }}
    >
      {children}
    </AppContextMine.Provider>
  );
}
