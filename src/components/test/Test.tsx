import { FC, useEffect, useState } from "react";
import { Hour, Status } from "../../logic/hour";

/**
 * Functional component to render a timetable of reserved and availible hours
 *
 * @param props Takes in an optional byteMatrix
 *
 * @todo Remove coupling between Reservationtable and componentstate
 *
 * @returns JSX Element
 */
const TestContainer: FC<{}> = () => {
  const hour = new Hour(12, Status.AVAILIBLE, false, { row: 0, column: 0 });

  return <Test hour={hour} />;
};

const Test: FC<{ hour: Hour }> = ({ hour }) => {
  const [handleClick] = useHour(hour);

  return (
    <>
      <div>{hour.getStatus()}</div>
      <button onClick={handleClick}>Hello</button>
    </>
  );
};

function useHour(hour: Hour): [() => void] {
  const [, setStatus] = useState(hour.getStatus());

  function handleClick() {
    if (hour.getStatus() === Status.AVAILIBLE) {
      hour.setStatus(Status.SELECTED);
    } else {
      hour.setStatus(Status.AVAILIBLE);
    }
    setStatus(hour.getStatus());
  }

  return [handleClick];
}

export default TestContainer;
