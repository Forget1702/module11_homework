export function createAdder(a) {
    if (typeof a != 'number') {
        throw new Error('Error');
    }
    return function addA(b) {
        return a + b;
    }
}
// alert( add5(5) )  Должно получиться 10
// alert( add5(12) )  Должно получиться 17