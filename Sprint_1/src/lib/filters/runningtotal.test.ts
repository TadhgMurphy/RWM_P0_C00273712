import { describe, it, expect } from "vitest";
import { runningTotal } from "./runningtotal";

describe('runningTotal', () => {
    it('calculates the runnong total of a sequence', () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
        const result = runningTotal(input);
        expect(result).toEqual([4, 6, 14, 17, 26, 30, 40, 45, 56, 62]);
    });
    it('handles an empty array', () => {
        expect(runningTotal([])).toEqual([]);
    });
    it('handles a single number', () => {
        expect(runningTotal([5])).toEqual([5]);
    });
});