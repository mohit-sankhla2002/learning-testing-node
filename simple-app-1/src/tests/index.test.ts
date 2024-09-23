import { sum, multiply } from "..";
import { expect, describe, it } from "@jest/globals";

describe("Sum Module", () => {
    it("adds: 1 + 2 equal to 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
})

describe("Multiply Module", () => {
    it("multiplies: 1 * 2 equal to 2", () => {
        expect(multiply(1, 2)).toBe(2);
    });

    it("multiplies: 4 * 5 equal to 20", () => {
        expect(multiply(4, 5)).toBe(20);
    });
})