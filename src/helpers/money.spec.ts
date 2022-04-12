import { formatMonetary } from "./money";

describe("formatMonetary", () => {
  it("should format a monetary value by CAD currency", () => {
    expect(formatMonetary(123.45, "CAD")).toBe("$123.45");
  });
});
