import RegoList from '../components/RegoList';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
// import Log from "../libs/Log";

configure({ adapter: new Adapter() });

const component = mount( <RegoList />);

describe('Testing <RegoList/>', ()=>{

    test('render',()=>{
        expect(component).toMatchSnapshot();
    });

    test('Search Bar render correctly',()=>{
        const btnWagon = component.find('.ant-radio-button-wrapper').at(1);
        const searchInput = component.find('input').at(0);
        const searchBtn = component.find('.ant-input-search-button').at(0);
        // Log.debug(btnWagon.text(), searchInput.length,searchBtn.length);
        expect(btnWagon.text()).toEqual('Wagon');
        expect(searchInput.length).toEqual(1);
        expect(searchBtn.length).toEqual(1);

    });

});
