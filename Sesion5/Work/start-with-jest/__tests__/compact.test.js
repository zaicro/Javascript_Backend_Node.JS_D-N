import { sumar, restar, multiplicar, dividir } from "../compact";

describe('Math functions', () => {
    test('sumar', () => {
            expect(sumar(2, 2)).toBe(4);
        }),
        test('restar', () => {
            expect(restar(2, 2)).toBe(0);
        }),
        test('multiplicar', () => {
            expect(multiplicar(2, 3)).toBe(6);
        }),
        test('dividir', () => {
            expect(dividir(8, 2)).toBe(4);
        }),
        test('dividir por cero', () => {
            //expect(dividir(2, 0)).toThrowError("No se puede divir por cero");
        })
})