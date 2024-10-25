import { describe, it, expect } from "vitest";
import { sum } from "../utils/sum";

describe("sum function", () => {
  it("should correctly sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should handle negative numbers", () => {
    expect(sum(-1, 2)).toBe(1);
  });
  it("should throw an error if inputs are not numbers", () => {
    expect(() => sum("a", 3)).toThrow("Invalid input");
  });
});
