import React from 'react';
import { MemoryRouter } from 'react-router-dom'

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Header from '../components/Header';

describe('Header', () => {
    
    //snapshot test
    test('Header renders correctly', () => {
        const component = renderer.create(<MemoryRouter> <Header /> </MemoryRouter>)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    })

    //enzyme tests
    it('renders a div with the class of div-ul', () => {
        const wrapper = mount(<MemoryRouter> <Header /> </MemoryRouter>)
        expect(wrapper.find('div.div-ul').length).toEqual(1)
    })


})

