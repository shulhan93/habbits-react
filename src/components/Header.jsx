export default function Header() {
  return (
    <header className="header">
      <h1 className="h1">------</h1>
      <div className="progress">
        <div className="progress__text">
          <div className="progress__name">Прогресс</div>
          <div className="progress__percent">---%</div>
        </div>
        <div className="progress__bar">
          <div className="progress__cover-bar"></div>
        </div>
      </div>
    </header>
  );
}
