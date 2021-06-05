import { Hour } from "./Hour";

export const Day: FunctionComponent<IVisualDay> = ({ IVisualDay }) => {
  return (
    <ul className="time-selection-list-row">
      <li className="time-selection-time-unit weekday">
        <p>{props.day}</p>
      </li>
      {props.hourTable.map((unit) => (
        <Hour />
      ))}
    </ul>
  );
};

interface IDayProps {
  hours: Array<IHourProps>;
  day: string;
}
