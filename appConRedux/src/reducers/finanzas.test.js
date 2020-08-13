import reducer, { agregar, eliminar } from './finanzas';

describe('Testing for "finanzas" Duck', () => {

    describe('Testing for Action creators', () => {
        it('should work while using the action "AGREGAR"', () => {
            const resultado = agregar(1)
            expect(resultado).toEqual({
                type: "AGREGAR",
                payload: 1
            })
        });

        it('should work while using the action "ELIMINAR"', () => {
            const resultado = eliminar(1)
            expect(resultado).toEqual({
                type: "ELIMINAR",
                index: 1
            })
        });
    });

    describe('Testing for reducer', () => {
        
        it('should work without an Action creator and return the state as it is', () => {
            const resultado = reducer([1, 4, 65], {
                type: "NOTHING IN MY REDUCER"
            })
            expect(resultado).toEqual([1, 4, 65])
        });

        it('should work with "Type: AGREGAR"', () => {
            const resultado = reducer([1], {
                type: "AGREGAR",
                payload: 2
            })
            expect(resultado).toEqual([1, 2])
        });

        it('should work with "Type: ELIMINAR"', () => {
            const resultado = reducer([1, 3, 5, 8], {
                type: "ELIMINAR",
                index: 2
            })
            expect(resultado).toEqual([1, 3, 8])
        });
    });
});