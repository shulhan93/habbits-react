import { useHabbits } from "../context/HabbitsContext";

export default function Habbit({ text, id }) {
  const { currentHabbit, setCurrentHabbit } = useHabbits();
  return (
    <button
      onClick={() => setCurrentHabbit(id)}
      className={`btn menu__item ${
        currentHabbit === id ? "menu__item_active" : ""
      }`}
    >
      {text}
    </button>
  );
}
