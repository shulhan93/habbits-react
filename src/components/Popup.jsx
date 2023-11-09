import { useState } from "react";
import { useHabbits } from "../context/HabbitsContext";
import EmojiPicker from "emoji-picker-react";

export default function Popup() {
  const { openModal, setOpenModal, onAddHabbit } = useHabbits();
  const [title, setTitle] = useState("");
  const [step, setStep] = useState("");
  const [icon, setIcon] = useState("");
  const [emoji, setEmoji] = useState(false);

  function handlerSubmitForm(e) {
    e.preventDefault();

    onAddHabbit(title, step, icon);
    setTitle("");
    setStep("");
    setOpenModal(false);
    setIcon("");
  }
  return (
    <>
      {openModal && (
        <div className="cover cover_hidden">
          <div className="popup">
            <h2>Новая привычка</h2>
            <div className="icon-label">
              <div className="emoji">
                <span>{icon}</span>{" "}
              </div>
              <button onClick={() => setEmoji(!emoji)} className="btn btn_lg">
                {!emoji ? `Выбрать эмоджи` : "Скрыть эмоджи"}
              </button>
            </div>

            {emoji && (
              <EmojiPicker
                previewConfig={{
                  showPreview: false,
                }}
                height={280}
                onEmojiClick={(emojiData) => {
                  setIcon(emojiData.emoji);
                  setEmoji(!emoji);
                }}
              />
            )}
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
                required
              />

              <input
                value={step}
                onChange={(e) => setStep(e.target.value)}
                type="number"
                name="target"
                placeholder="Цель"
                required
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
