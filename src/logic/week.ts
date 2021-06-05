import {
  HourSelection,
  IDay,
  Iselectable,
  IWeek,
  IWeekFactory,
  SelectionType,
} from "./interfaces";

export class Week implements Iselectable, IWeek {
  private days: Array<IDay>;

  constructor(days: Array<IDay>) {
    if (days.length !== 7) {
      throw new Error("A week needs only seven days!");
    }
    this.days = days;
  }

  public select(selectionType: SelectionType, selection?: HourSelection): void {
    throw new Error("Method not implemented.");
  }
  public getDays(): IDay[] {
    return this.days;
  }
}

export class WeekFactory implements IWeekFactory {
  createWeek(reservationMap: boolean[][], startDay: number): IWeek {
    throw new Error("Method not implemented.");
  }
}
