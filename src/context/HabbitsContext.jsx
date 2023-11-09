import { createContext, useContext, useEffect, useState } from "react";
const HabbitsContext = createContext();
import habbits from "../data/demo.json";

function useHabbits() {
  const context = useContext(HabbitsContext);
  return context;
}

const KEY = "habbits_data";

function HabbitsProvider({ children }) {
  const [habbits, setHabbits] = useState(
    JSON.parse(localStorage.getItem(KEY)) || []
  );

  const [openModal, setOpenModal] = useState(false);
  const [currentHabbit, setCurrentHabbit] = useState("");

  function handleAddHabbit(title, step) {
    const habbit = {
      id: habbits.length,
      title,
      step,
      days: [{ comment: "Первый подход всегда дается тяжело" }],
    };
    setCurrentHabbit(habbit.id);

    setHabbits([...habbits, habbit]);
  }

  useEffect(
    function () {
      localStorage.setItem(KEY, JSON.stringify(habbits));
    },
    [habbits]
  );

  return (
    <HabbitsContext.Provider
      value={{
        habbits,
        onAddHabbit: handleAddHabbit,
        openModal,
        setOpenModal,
        currentHabbit,
        setCurrentHabbit,
      }}
    >
      {children}
    </HabbitsContext.Provider>
  );
}

export { HabbitsProvider, useHabbits };
