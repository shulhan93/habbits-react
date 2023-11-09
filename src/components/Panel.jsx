import { useHabbits } from "../context/HabbitsContext";
import Habbit from "./Habbit";

export default function Panel() {
  const { setOpenModal, habbits } = useHabbits();
  return (
    <div className="panel">
      <img
        className="logo"
        src="/src/assets/images/logo.svg"
        alt="Логотип Habbit App"
      />
      <nav className="menu">
        <div className="menu__list">
          {habbits.map((habbit, i) => (
            <Habbit
              key={i}
              id={habbit.id}
              text={habbit.id}
              icon={habbit.icon}
            />
          ))}
        </div>
        <button className="btn menu__add" onClick={() => setOpenModal(true)}>
          <img src="/src/assets/images/add.svg" alt="Добавить привычку" />
        </button>
      </nav>
    </div>
  );
}
