import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe("Menu component", () => {
    const wrapper= shallow(<Menu  />)
    const click = wrapper.simulate("click");
    it("wrapper contains click event", () => {
        expect(wrapper.text()).not.toBe("Homes")
        expect(wrapper.text()).toBe("")
        expect(click.props().children.length).toEqual(3)


    })
})