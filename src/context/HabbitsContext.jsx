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
  const [currentHabbit, setCurrentHabbit] = useState(0);

  function handleAddHabbit(title, step) {
    const habbit = {
      id: habbits.length,
      title,
      step,
      days: [
        { id: title + step, comment: "Первый подход всегда дается тяжело" },
      ],
    };
    setCurrentHabbit(habbit.id);

    setHabbits([...habbits, habbit]);
  }

  function handlerDelDay(id) {
    const habbit = {
      ...habbits[currentHabbit],
      days: habbits[currentHabbit].days.filter((day) => day.id != id),
    };

    setHabbits(habbits.with(currentHabbit, habbit));
  }

  function handlerAddComment(comment) {
    const habbit = {
      ...habbits[currentHabbit],
      days: [...habbits[currentHabbit].days, { id: comment, comment }],
    };

    setHabbits(habbits.with(currentHabbit, habbit));
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
        onAddComment: handlerAddComment,
        onDelDay: handlerDelDay,
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
