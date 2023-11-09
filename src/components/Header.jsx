import { useHabbits } from "../context/HabbitsContext";

export default function Header() {
  const { currentHabbit, habbits } = useHabbits();

  let percent =
    (habbits[currentHabbit]?.days.length / habbits[currentHabbit]?.step) *
      100 || 0;

  return (
    <header className="header">
      <h1 className="h1">{habbits[currentHabbit]?.title}</h1>
      <div className="progress">
        <div className="progress__text">
          <div className="progress__name">Прогресс</div>
          <div className="progress__percent">{percent}%</div>
        </div>
        <div className="progress__bar">
          <div
            className="progress__cover-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
}
