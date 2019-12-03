import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Login from '../components/Login';


describe('Login', () => {

  //snapshot test for login page, takes a picture of how the html should look
  //and compares differences, can be updated by just pressing u in the test suite
  //when a snapshot is failed - useful for testing UI doesn't change unexpectedly
  test('snapshot renders', () => {
    const component = renderer.create(<Login />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //enzyme test for login page, 
  it('renders the inner div with class login-box ', () => {
    const wrapper = mount(<Login />)
    expect(wrapper.find('div.login-box').length).toEqual(1)
  })

  it(`renders the form within the inner div above`, () => {
    const wrapper = mount(<Login />)
    expect(wrapper.find('form.login-form').length).toEqual(1)
  })

  // it('send form data correctly on click', ()=>{

  //   const wrapper = mount(<Login />)
  //   wrapper.find('input.login-input').at(0).simulate('click')
    
  // })
});

