import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe("Link component", () => {
    const wrapper = shallow(<Link url="#home"/>);
    const url = wrapper.exists(".link");
    const click = wrapper.simulate("click");

    it("Link render in screen", () => {
        expect(wrapper.find("a").text()).not.toBe("Homes")
        expect(url).toBeTruthy();
        expect(click.props().href).toBe("#home")
        expect(click.props().href).not.toBe("#about")
    })
})