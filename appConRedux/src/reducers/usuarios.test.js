import { fetchUsuarios } from './usuarios';

describe('Testing for "usuarios" Duck', () => {

    describe('Testing for "fetchUsuarios"', () => {
        it('should succed when fetching users from the API', async () => {
            const dispatch = jest.fn()
            const getState = jest.fn()
            const services = {
                axios: {
                    get: jest.fn().mockResolvedValue({
                        data: 1
                    })
                }
            }
            await fetchUsuarios()(dispatch, getState, services)
            expect(dispatch.mock.calls).toEqual([
                [{
                    type: "FETCH_USUARIOS_START",
                    error: false
                }],
                [{
                    type: "FETCH_USUARIOS_SUCCESS",
                    payload: 1,
                }]
            ])
        });
        it('should fail on fetching users from the API', async () => {
            const dispatch = jest.fn()
            const getState = jest.fn()
            const services = {
                axios: {
                    get: jest.fn().mockRejectedValue({ message: 'ha fallado el fetch de usuarios' })
                }
            }
            await fetchUsuarios()(dispatch, getState, services)
            expect(dispatch.mock.calls).toEqual([
                [{
                    type: "FETCH_USUARIOS_START",
                    error: false
                }],
                [{
                    type: "FETCH_USUARIOS_ERROR",
                    payload: 'ha fallado el fetch de usuarios',
                    error: true
                }]
            ])
        });
    });
});