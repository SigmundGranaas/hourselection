import { FunctionComponent } from "react";
import { Status } from "../../logic/hour";

export const Hour: FunctionComponent<IHourProps> = ({ time, status }) => {
  return (
    <li>
      {time}, {status}
    </li>
  );
};

interface IHourProps {
  time: number;
  status: Status;
}
