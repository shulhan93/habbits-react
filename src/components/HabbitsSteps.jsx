import { useHabbits } from "../context/HabbitsContext";
import Step from "./Step";

export default function HabbitsSteps() {
  const { currentHabbit, habbits } = useHabbits();
  return (
    <div id="days">
      {habbits[currentHabbit].days.map((day, i) => (
        <Step key={i} comment={day.comment} day={i} />
      ))}
    </div>
  );
}
