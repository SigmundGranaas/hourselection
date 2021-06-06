import { Position, Status } from "./interfaces";

export class Hour implements IHour {
  private readonly time: number;
  status: Status;
  private between: boolean;
  private readonly position: Position;

  constructor(
    time: number,
    status: Status,
    between: boolean,
    position: Position
  ) {
    this.time = time;
    this.status = status;
    this.between = between;
    this.position = position;
  }
  getTime(): number {
    return this.time;
  }

  getStatus(): Status {
    return this.status;
  }

  setStatus(newStatus: Status) {
    this.status = newStatus;
  }

  getPosition(): Position {
    return this.position;
  }

  setIsBetween(between: boolean) {
    this.between = between;
  }
  isBetween(): boolean {
    return this.between;
  }
}

export interface IHour {
  setStatus(newStatus: Status): void;
  getStatus(): Status;
  getTime(): number;
}
