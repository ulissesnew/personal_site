import React from 'react';
import Section from './Section';

import { shallow, render } from 'enzyme';

describe("Button component", () => {
    const wrapper = shallow(<Section id="about"/>)
    const wrapper2 = render(<Section id="abouts">Ok</Section>)


    it("wrapper render in screen", () => {
        expect(wrapper.props().id.length).toEqual(5);
        expect(wrapper.props().id).toBe("about");
        expect(wrapper2.text()).toBe('Ok')
     
    })
})