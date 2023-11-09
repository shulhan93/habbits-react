import { useHabbits } from "../context/HabbitsContext";

export default function Step({ comment, day, id }) {
  console.log(id);
  const { onDelDay } = useHabbits();
  return (
    <div className="habbit">
      <div className="habbit__day">День {day + 1}</div>
      <div className="habbit__comment">{comment}</div>
      <button className="habbit__delete" onClick={() => onDelDay(id)}>
        <img src="/src/assets/images/delete.svg" alt="Удаление привычки" />
      </button>
    </div>
  );
}
