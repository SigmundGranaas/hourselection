import { Hour, IHour } from "./hour";
import {
  Selection,
  IDay,
  Iselectable,
  SelectionType,
  Status,
} from "./interfaces";

export class Day implements Iselectable, IDay {
  private hours: Array<IHour>;
  private date: Date;
  private startHour: number;

  constructor(hours: Array<IHour>, date: Date, starthour: number) {
    if (hours.length < 1 || hours.length > 24) {
      throw new Error(
        `Need to create a day with atleast 1 hour, but not more than 24 hours, current hours: ${hours.length}`
      );
    }
    if (starthour < 0 || starthour > 23) {
      throw new Error(
        `Starttime cannot be before 1 or after 24, current startime is: ${starthour} `
      );
    }
    this.date = date;
    this.hours = hours;
    this.startHour = starthour;
  }

  public select(selectionType: SelectionType, selection?: Selection): void {
    switch (selectionType) {
      case SelectionType.Clear: {
        this.clearDay();
        break;
      }
      case SelectionType.Disable: {
        this.disableDay();
        break;
      }
      case SelectionType.Selected: {
        this.ReserveDay();
        break;
      }
      case SelectionType.FirstSelection: {
        if (selection?.firstSelection !== undefined) {
          this.createFirstSelection(selection.firstSelection);
        } else {
          this.clearDay();
        }
        break;
      }
      case SelectionType.SecondSelection: {
        if (selection?.secondSelection !== undefined) {
          this.manageSecondSelection(selection);
        } else {
          this.clearDay();
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
  manageSecondSelection(selection: Selection) {}

  private createSecondSelection(selection: Selection) {}

  private createFirstSelection(selection: Date) {
    const selectedHour = selection.getHours();
    const firstSelection = new Hour(selectedHour, Status.SELECTED, false, {
      row: 0,
      column: 0,
    });
    this.hours[selection.getTime() - this.startHour - 1] = firstSelection;
  }

  private ReserveDay() {
    this.setHours(
      DayFactory.createSelectedHours(this.hours.length, this.startHour)
    );
  }

  private clearDay() {
    this.setHours(
      DayFactory.createAvailibleHours(this.hours.length, this.startHour)
    );
  }

  private disableDay() {
    this.setHours(
      DayFactory.createReservedHours(this.hours.length, this.startHour)
    );
  }

  private setHours(hours: IHour[]) {
    this.hours = hours;
  }

  getHours(): IHour[] {
    return this.hours;
  }
  getDate(): Date {
    return this.date;
  }
}

/**
 * TODO Change this to a hourFactory
 */
export class DayFactory {
  public static createDefaultDay(): Day {
    return new Day(this.createAvailibleHours(), new Date(), 0);
  }

  public static createAvailibleHours(
    noHours: number = 24,
    startHour: number = 0
  ): Hour[] {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= noHours - 1; i++) {
      hours.push(
        new Hour(startHour + i, Status.AVAILIBLE, false, { row: 0, column: 0 })
      );
    }
    return hours;
  }

  public static createSelectedHours(
    noHours: number = 24,
    startHour: number = 0
  ): Hour[] {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= noHours - 1; i++) {
      hours.push(
        new Hour(startHour + i, Status.SELECTED, true, { row: 0, column: 0 })
      );
    }
    return hours;
  }
  public static createReservedHours(
    noHours: number = 24,
    startHour: number = 0
  ): Hour[] {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= noHours - 1; i++) {
      hours.push(
        new Hour(startHour + i, Status.RESERVED, false, { row: 0, column: 0 })
      );
    }
    return hours;
  }
  public static createDay(noHours: number, startHour: number): Day {
    let hours: Hour[] = [];
    let i;
    for (i = 0; i <= noHours - 1; i++) {
      hours.push(
        new Hour(startHour + i, Status.AVAILIBLE, false, { row: 0, column: 0 })
      );
    }
    return new Day(hours, new Date(), startHour);
  }
}
