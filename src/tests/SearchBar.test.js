import SearchBar from '../components/SearchBar';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
// import Log from "../libs/Log";

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
const setList = jest.fn();
const component = mount(
    <SearchBar
        //  { ...props }
        data = { fakeData }
        setList = { setList }
    />);

describe('Testing <SearchBar/>', ()=>{

    test('render',()=>{
        expect(component).toMatchSnapshot();
    });

    test('Search Bar render correctly',()=>{
        const searchInput = component.find('input').last();
        expect(component.find('input[value="All"]').length).toEqual(1);
        expect(component.find('input[value="Wagon"]').length).toEqual(1);
        expect(component.find('input[value="Sedan"]').length).toEqual(1);
        expect(component.find('input[value="Hatch"]').length).toEqual(1);
        expect(component.find('input[value="SUV"]').length).toEqual(1);
        expect(component.find('input[value="Truck"]').length).toEqual(1);

        searchInput.simulate('change',{
            target:{
                value:'test'
            }
        });

        // input value changes to 'test'
        expect(component.find('input[value="test"]').length).toEqual(1);

    });

});
