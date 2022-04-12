import { formatDate } from "./date";

describe("formatDate", () => {
  it("should format date", () => {
    const date = new Date(2020, 0, 1, 10, 0, 0);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2020-01-01, 10:00");
  });
});
