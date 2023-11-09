import { useState } from "react";
import { useHabbits } from "../context/HabbitsContext";

export default function Main({ children }) {
  const { onAddComment, habbits, currentHabbit } = useHabbits();
  const [comment, setComment] = useState("");

  function handlerSubmitFrom(e) {
    e.preventDefault();
    onAddComment(comment);
    setComment("");
  }

  return (
    <main>
      {children}
      {habbits[currentHabbit]?.step != habbits[currentHabbit]?.days.length && (
        <div className="habbit">
          <div className="habbit__day">
            День{" "}
            {!habbits[currentHabbit]?.days
              ? 1
              : habbits[currentHabbit]?.days.length + 1}
          </div>

          <form className="habbit__form" onSubmit={handlerSubmitFrom}>
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className="input-icon"
              name="comment"
              type="text"
              placeholder="Комментарий"
            />
            <img
              className="input__icon"
              src="/src/assets/images/comment.svg"
              alt="Иконка комментария"
            />
            <button className="btn btn_lg habbit__ready" type="submit">
              Готово
            </button>
          </form>
        </div>
      )}

      <div className="welcome">Добавьте привычки</div>
    </main>
  );
}
