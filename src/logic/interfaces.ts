import { IHour } from "./hour";

interface Iselectable {
  select(selectionType: SelectionType, selection?: HourSelection): void;
}

export enum SelectionType {
  FirstSelection = "FIRST_SELECTION",
  SecondSelection = "SECOND_SELECTION",
  Clear = "CLEAR",
  Disable = "DISABLE",
}

type HourSelection = {
  selection: Date;
};

interface IWeek {
  getDays(): Array<IDay>;
}

interface IDay {
  getHours(): Array<IHour>;
  getDate(): Date;
}

interface IWeekFactory {
  createWeek(reservationMap: boolean[][], startDay: number): IWeek;
}

interface IDayFactory {
  createDay(): IDay;
}

/**
 * Status enum for TimeUnits
 *
 *  @type AVAILIBLE for units that are selectable
 *  @type RESERVED for units that are reserved or unselectable
 *  @type SELECTED for units that are selected or between two selected points
 */
export enum Status {
  AVAILIBLE = "AVAILIBLE",
  RESERVED = "RESERVED",
  SELECTED = "SELECTED",
}

/**
 * Position interface for creating positions in the week/hour grid
 */
interface Position {
  readonly row: number;
  readonly column: number;
}

export type {
  Position,
  IWeekFactory,
  IHour,
  IDay,
  IWeek,
  HourSelection,
  Iselectable,
  IDayFactory,
};
