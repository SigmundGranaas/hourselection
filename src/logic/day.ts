import { Hour, IHour } from "./hour";
import {
  HourSelection,
  IDay,
  Iselectable,
  SelectionType,
  Status,
} from "./interfaces";

export class Day implements Iselectable, IDay {
  private hours: Array<IHour>;
  private date: Date;

  constructor(hours: Array<IHour>, date: Date) {
    if (hours.length < 1 || hours.length > 24) {
      throw new Error(
        `Need to create a day with atleast 1 hour, but not more than 24 hours, current hours: ${hours.length}`
      );
    }
    this.date = date;
    this.hours = hours;
  }
  getHours(): IHour[] {
    return this.hours;
  }
  getDate(): Date {
    return this.date;
  }

  public select(selectionType: SelectionType, selection?: HourSelection): void {
    switch (selectionType) {
      case SelectionType.Clear: {
        this.clearDay();
        break;
      }
      case SelectionType.Disable: {
        this.disableDay();
        break;
      }
      case SelectionType.FirstSelection: {
        if (selection) {
        } else {
        }
        break;
      }
      case SelectionType.SecondSelection: {
        if (selection) {
        } else {
        }
        break;
      }
      default: {
        if (selection) {
        } else {
        }
        break;
      }
    }
  }
  private clearDay() {
    this.setHours(DayFactory.createDefaultHours());
  }

  private disableDay() {
    this.setHours(DayFactory.createReservedHours());
  }

  private setHours(hours: IHour[]) {
    this.hours = hours;
  }
}

export class DayFactory {
  static createDefaultDay(): Day {
    return new Day(this.createDefaultHours(), new Date());
  }
  static createDefaultHours(): Hour[] {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= 23; i++) {
      hours.push(new Hour(i, Status.AVAILIBLE, false, { row: 0, column: 0 }));
    }
    return hours;
  }
  static createReservedHours(): Hour[] {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= 23; i++) {
      hours.push(new Hour(i, Status.RESERVED, false, { row: 0, column: 0 }));
    }
    return hours;
  }
}
