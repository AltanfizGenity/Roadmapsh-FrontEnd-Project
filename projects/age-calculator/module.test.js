import { expect, test } from "vitest";
import { calculateAge } from "./libs";

let easyTestSuite = [
  {
    input: "2004-02-16",
    expectYear: 21,
  },
  {
    input: "2000-01-01",
    expectYear: 25,
  },
  {
    input: "1995-08-30",
    expectYear: 29,
  },
  {
    input: "2010-06-15",
    expectYear: 14,
  },
  {
    input: "2025-02-23",
    expectYear: 0,
  },
  {
    input: "2024-02-29",
    expectYear: 0,
  },
  {
    input: "2000-02-29",
    expectYear: 24,
  },
  {
    input: "2004-02-29",
    expectYear: 20,
  },
];

test("calcuate various age", () => {
  easyTestSuite.forEach((_test) => {
    let calculatedAge = calculateAge(_test.input);
    expect(calculatedAge.years).toBe(_test.expectYear);
  });
});
