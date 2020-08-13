import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import App from './App';

configure({ adapter: new Adapter });

describe('Testing for App', () => {
    it('should interact with the store', () => {
        const prevent = jest.fn()
        const reducer = jest.fn().mockReturnValue({
            finanzas: [{ desc: 'lala', cant: 150 }]
        })
        const store = createStore(reducer)
        const wrapper = mount(
            <Provider
                store={store}
            >
                <App />
            </Provider>
        );
        wrapper
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'lele' } })
        wrapper
            .find('input')
            .at(1)
            .simulate('change', { target: { value: '200' } })
        wrapper
            .find('form')
            .simulate('submit', { preventDefautl: prevent })
        wrapper
            .find('button')
            .at(2)
            .simulate('click')

        const [a, ...rest] = reducer.mock.calls;
        expect(rest).toEqual([
            [
                { finanzas: [{ desc: 'lala', cant: 150 }] },
                { type: "AGREGAR", payload: { desc: 'lele', cant: 200 }}
            ],
            [
                { finanzas: [{ desc: 'lala', cant: 150 }] },
                { type: "ELIMINAR", index: 0 }
            ]
        ]);
        const resultadoDesc = wrapper
            .text()
            .includes('lala')
        expect(resultadoDesc).toEqual(true)

        const resultadoCant = wrapper
            .text()
            .includes(150)
        expect(resultadoCant).toEqual(true)

        const resultadoTitulo = wrapper
            .text()
            .includes('Finanzly')
        expect(resultadoTitulo).toEqual(true)
    });
})
