import {createAdder} from './index.js';

describe('tests for createAdder func', () => {
    it('adds 5 + 5 to equal 10', () => {
        const add5 = createAdder(5);
        expect(add5(5)).toBe(10);
    });
    it('adds 5 + 12 to equal 17', () => {
        const add5 = createAdder(5);
        expect(add5(12)).toBe(17);
    });
    it('should throw an error if a is not number', () => {
        expect(() => createAdder('5')).toThrow();
    });
    it('adds 0 + 5 to equal 5', () => {
        const add0 = createAdder(0);
        expect(add0(5)).toBe(5);
    });
    it('should error for array input', () => {
        expect(() => createAdder([1, 2, 3])).toThrow();
    });
})