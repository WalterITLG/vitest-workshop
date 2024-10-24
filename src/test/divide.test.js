import { describe, it, expect } from "vitest";
import { divide } from "../utils/divide";

describe("divide function", () => {
  it("should correctly divide two numbers", () => {
    expect(divide(4, 2)).toBe(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => divide(4, 0)).toThrow("Cannot divide by zero");
  });
});
