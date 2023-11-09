export default function Step() {
  return (
    <div className="habbit">
      <div className="habbit__day">День 1</div>
      <div className="habbit__comment"></div>
      <button className="habbit__delete">
        <img src="/src/assets/images/delete.svg" alt="Удаление привычки" />
      </button>
    </div>
  );
}
