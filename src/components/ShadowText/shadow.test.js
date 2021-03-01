import React from 'react';
import { shallow } from 'enzyme';
import ShadowText from './ShadowText';

describe("ShadowText component", () => {
    const wrapper = shallow(<ShadowText arr={["Jo","bs"]} left="50px"/>);
    it("ShadowText render in screen", () => {
        expect(wrapper.text()).toBe("Jobs")
        expect(wrapper.text().length).not.toEqual(1)

        expect(wrapper.props()).toBeTruthy();
        expect(wrapper.props().style.left).toBe("50px")
    })
})