import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Finanzas from './Finanzas';

configure({ adapter: new Adapter });

describe('Testing for the "Finanzas" component', () => {
    it('should render the information as submited and delete this info when clicking on the button', () => {
        const finanzas = [
            {
                desc: 'Finanza 1',
                cant: 100
            },
            {
                desc: 'Finanza 2',
                cant: 80
            },
            {
                desc: 'Finanza 3',
                cant: 120
            }
        ];
        const eliminarFinanza = jest.fn();
        const wrapper = shallow(
            <Finanzas
                finanzas={finanzas}
                eliminarFinanza={eliminarFinanza}
            />
        );
        wrapper
            .find('button')
            .at(1)
            .simulate('click')

        expect(eliminarFinanza.mock.calls).toEqual([[1]])

        const resultado1 = wrapper
            .text()
            .includes('Finanza 1')
        expect(resultado1).toEqual(true);

        const resultado2 = wrapper
            .text()
            .includes('Finanza 2')
        expect(resultado2).toEqual(true);

        const resultado3 = wrapper
            .text()
            .includes('Finanza 3')
        expect(resultado3).toEqual(true);
    });
});