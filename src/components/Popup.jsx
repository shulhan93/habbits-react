import { useState } from "react";
import { useHabbits } from "../context/HabbitsContext";

export default function Popup() {
  const { openModal, setOpenModal, onAddHabbit } = useHabbits();
  const [title, setTitle] = useState("");
  const [step, setStep] = useState("");

  function handlerSubmitForm(e) {
    e.preventDefault();

    onAddHabbit(title, step);
    setTitle("");
    setStep("");
    setOpenModal(false);
  }
  return (
    <>
      {openModal && (
        <div className="cover cover_hidden">
          <div className="popup">
            <h2>Новая привычка</h2>
            <div className="icon-label">Иконка</div>

            <button
              className="popup__close"
              onClick={() => setOpenModal(false)}
            >
              <img src="/src/assets/images/close.svg" alt="Закрыть" />
            </button>
            <form className="popup__form" onSubmit={handlerSubmitForm}>
              <input
                type="text"
                name="name"
                placeholder="Название"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                value={step}
                onChange={(e) => setStep(e.target.value)}
                type="number"
                name="target"
                placeholder="Цель"
              />
              <button
                className="btn btn_lg"
                type="submit"
                onClick={handlerSubmitForm}
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
