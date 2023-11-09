export default function Main({ children }) {
  return (
    <main>
      {children}

      <div className="habbit">
        <div className="habbit__day">День 1</div>
        <form className="habbit__form">
          <input
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
      <div className="welcome">Добавьте привычки</div>
    </main>
  );
}
