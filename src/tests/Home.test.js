import HomePage from '../pages/HomePage/HomePage';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = mount( <HomePage
/>);

describe('Testing <RegoList/>', ()=>{

    test('render',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    // test('Log out button',()=>{
    //     const btn = wrapper.find('button');
    //     expect(btn.text()).toEqual('Log Out');

    // });

});
