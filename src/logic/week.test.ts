describe("Week class", () => {
  it.todo("Does not accept anything but seven days");
  it.todo("");
});

describe("Week factory", () => {
  it.todo("Only creates week with 7 days");
  it.todo("Creates Week with default reservations");
  it.todo("Creates Week with reservations");
  it.todo("Creates week with sStartDays");
});

const exampleReservationTable = [
  [false, true, true, true, true, true, true, true, true, true],
  [false, true, true, false, false, false, false, true, true, true],
  [false, true, true, true, true, true, true, true, true, true],
  [false, true, true, false, true, false, true, true, true, true],
  [false, true, true, false, false, false, true, false, false, false],
  [false, true, false, false, false, false, true, true, true, true],
  [false, false, true, true, true, false, false, false, true, true],
];
