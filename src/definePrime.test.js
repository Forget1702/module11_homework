import {definePrime} from "./definePrime";

xdescribe('tests for definePrime func', () => {
    it('should operate correctly with simple num', () => {
        expect(definePrime(17)).toBe(`Число 17 - простое число`)
    }),
    it('should operate correctly with complex num', () => {
        expect(definePrime(18)).toBe(`Число 18 - составное число`)
    }),
    it('should operate correctly with invalid num', () => {
        expect(definePrime(1001)).toBe(`Данные неверны`)
    })
});