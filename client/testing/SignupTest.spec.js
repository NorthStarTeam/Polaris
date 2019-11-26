import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import SignUp from '../components/SignUp';

describe('SignUp', () => {
    
    //snapshot test
    test('SignUp renders correctly', () => {
        const component = renderer.create(<MemoryRouter> <SignUp /> </MemoryRouter>)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    })

    //enzyme tests
    it('renders a div with the class of signup-box', () => {
        const wrapper = mount(<MemoryRouter> <SignUp /> </MemoryRouter>)
        expect(wrapper.find('div.signup-box').length).toEqual(1)
    })


})