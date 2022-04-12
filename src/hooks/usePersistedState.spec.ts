import usePersistedState from "./usePersistedState";

describe("usePersistedState", () => {
  it("should return a function", () => {
    expect(typeof usePersistedState).toBe("function");
  });
});
