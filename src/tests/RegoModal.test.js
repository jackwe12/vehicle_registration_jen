import RegoModal from '../components/RegoModal';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const fakeData =
    {
        plate_number: 'EBF28E',
        registration: {
            expired: false,
            expiry_date: '2021-02-05T23:15:30.000Z'
        },
        vehicle: {
            type: 'Wagon',
            make: 'BMW',
            model: 'X4 M40i',
            colour: 'Blue',
            vin: '12389347324',
            tare_weight: 1700,
            gross_mass: null,
            vin_mask:'*************7324'
        },
        insurer: {
            name: 'Allianz',
            code: 32
        }
    };
const mockHandler = jest.fn();

const component = mount(
    <RegoModal
        item={ fakeData }
        visible={ true }
        onCancelModal={ mockHandler }
    />
);

describe('Testing <DetailModal/>', ()=>{

    test('render',()=>{
        expect(component).toMatchSnapshot();
    });

    test('Modal renders correct data',()=>{
        //try the first 5 data if it's correct
        expect(component.find('td').at(0)
            .text()).toEqual('EBF28E');
        expect(component.find('td').at(1)
            .text()).toEqual('Wagon');
        expect(component.find('td').at(2)
            .text()).toEqual('BMW');
        expect(component.find('td').at(3)
            .text()).toEqual('X4 M40i');
        expect(component.find('td').at(4)
            .text()).toEqual('Blue');
    });

});
