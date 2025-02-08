import { shortName } from "@/utils/functions/short-name";
import { describe, expect, it } from "vitest";

describe("shortName function", () => {
  it("should return 'UN' if the string is empty", () => {
    expect(shortName("")).toBe("UN");
  });

  it("should return the first letters of the first and second name", () => {
    expect(shortName("John Smith")).toBe("JS");
    expect(shortName("Maria Clara")).toBe("MC");
    expect(shortName("Carlos Eduardo")).toBe("CE");
  });

  it("should return the first two letters if there is only one name", () => {
    expect(shortName("John")).toBe("JO");
    expect(shortName("Peter")).toBe("PE");
  });

  it("should handle extra spaces correctly", () => {
    expect(shortName("  Ana   Paula  ")).toBe("AP");
  });

  it("should be case-insensitive", () => {
    expect(shortName("john smith")).toBe("JS");
    expect(shortName("ANA PAULA")).toBe("AP");
  });

  it("should work correctly with short single names", () => {
    expect(shortName("A")).toBe("A");
  });

  it("should ignore multiple spaces between words", () => {
    expect(shortName("Carlos    Eduardo")).toBe("CE");
  });
});
