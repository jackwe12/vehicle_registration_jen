import SearchBar from '../components/SearchBar';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
// import Log from "../libs/Log";

configure({ adapter: new Adapter() });

const fakeData =
[
    {
        'plate_number': 'EBF28E',
        'registration': {
            'expired': false,
            'expiry_date': '2021-02-05T23:15:30.000Z'
        },
        'vehicle': {
            'type': 'Wagon',
            'make': 'BMW',
            'model': 'X4 M40i',
            'colour': 'Blue',
            'vin': '12389347324',
            'tare_weight': 1700,
            'gross_mass': null
        },
        'insurer': {
            'name': 'Allianz',
            'code': 32
        }
    },
    {
        'plate_number': 'CXD82F',
        'registration': {
            'expired': true,
            'expiry_date': '2020-03-01T23:15:30.000Z'
        },
        'vehicle': {
            'type': 'Hatch',
            'make': 'Toyota',
            'model': 'Corolla',
            'colour': 'Silver',
            'vin': '54646546313',
            'tare_weight': 1432,
            'gross_mass': 1500
        },
        'insurer': {
            'name': 'AAMI',
            'code': 17
        }
    },
    {
        'plate_number': 'WOP29P',
        'registration': {
            'expired': false,
            'expiry_date': '2020-12-08T23:15:30.000Z'
        },
        'vehicle': {
            'type': 'Sedan',
            'make': 'Mercedes',
            'model': 'X4 M40i',
            'colour': 'Blue',
            'vin': '87676676762',
            'tare_weight': 1700,
            'gross_mass': null
        },
        'insurer': {
            'name': 'GIO',
            'code': 13
        }
    },
    {
        'plate_number': 'QWX55Z',
        'registration': {
            'expired': false,
            'expiry_date': '2021-07-20T23:15:30.000Z'
        },
        'vehicle': {
            'type': 'SUV',
            'make': 'Jaguar',
            'model': 'F pace',
            'colour': 'Green',
            'vin': '65465466541',
            'tare_weight': 1620,
            'gross_mass': null
        },
        'insurer': {
            'name': 'NRMA',
            'code': 27
        }
    }
];

describe('Testing <SearchBar/>', ()=>{
    let component;
    let setList;
    beforeEach(() => {
        setList = jest.fn();
        component = mount(
            <SearchBar
            //  { ...props }
                data = { fakeData }
                setList = { setList }
            />);
    });

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

    test('filter function, test keyword',()=>{
        const searchInput = component.find('input').last();
        const searchBtn = component.find('.ant-input-search-button').at(0);
        searchInput.simulate('change',{
            target:{
                value:'BMW'
            }
        });
        searchBtn.simulate('click');
        expect(setList.mock.calls.length).toBe(1);
        // the first first call of the first parameter, pick the first result and check if filtered right
        expect(setList.mock.calls[0][0][0]['plate_number']).toBe('EBF28E');

    });
    test('filter function, test type',()=>{

        const typeBtn = component.find('.ant-radio-button-input').at(3);

        // only the checked true can simulate the event!
        expect(typeBtn.length).toBe(1);
        typeBtn.simulate('change',{
            target:{
                checked: true
            }
        });

        expect(setList.mock.calls.length).toBe(1);
        expect(setList.mock.calls[0][0][0]['plate_number']).toBe('CXD82F');

    });

});
