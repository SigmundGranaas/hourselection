import { Day, DayFactory } from "./day";
import { Hour } from "./hour";
import { SelectionType, Status } from "./interfaces";

let day: Day = DayFactory.createDefaultDay();

beforeEach(() => {
  day = DayFactory.createDefaultDay();
});

describe("Day class creation", () => {
  it("Cannot create a day with more than 24 hours", () => {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= 100; i++) {
      hours.push(new Hour(i, Status.AVAILIBLE, false, { row: 0, column: 0 }));
    }
    expect(hours.length).toBeGreaterThanOrEqual(24);

    const errortest = () => {
      return new Day(hours, new Date());
    };

    expect(errortest).toThrow(Error);
  });

  it("Cannot create a day with less than 1 hour", () => {
    let hours: Hour[] = [];

    const errortest = () => {
      return new Day(hours, new Date());
    };
    expect(hours.length).toBe(0);
    expect(errortest).toThrow(Error);
  });
});

describe("Day class selection handling", () => {
  it("Will disable all hours", () => {
    const hours = day.getHours();
    day.select(SelectionType.Disable);
    day.getHours().forEach((hour) => {
      expect(hour.getStatus()).toBe(Status.RESERVED);
    });
    expect(hours === day.getHours()).toBe(false);
  });

  it("Will clear all days", () => {
    const hours = day.getHours();
    day.select(SelectionType.Clear);
    day.getHours().forEach((hour) => {
      expect(hour.getStatus()).toBe(Status.AVAILIBLE);
    });
    expect(hours === day.getHours()).toBe(false);
  });
  it("Will execute first selection", () => {
    day.select(SelectionType.FirstSelection, { selection: new Date() });
  });
  it("Will execute second selection", () => {
    day.select(SelectionType.SecondSelection, { selection: new Date() });
  });
  it("Will redo second selection", () => {
    day.select(SelectionType.SecondSelection, { selection: new Date() });
  });

  it("Will clear when selected first selection again", () => {
    day.select(SelectionType.FirstSelection);
  });
  it("Will clear when selected second selection again", () => {
    day.select(SelectionType.SecondSelection);
  });
});

describe("Day factory", () => {
  it("Creates default Day", () => {
    day = DayFactory.createDefaultDay();
    expect(day.getHours().length).toEqual(24);
  });
});
