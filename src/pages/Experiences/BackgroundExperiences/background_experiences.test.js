import React from 'react';
import { shallow, render } from 'enzyme';
import Background from './Background';

describe("Background component", () => {
    const wrapper = shallow(<Background><p>Text</p></Background>);
    const id = wrapper.exists("#background");

    it("Background render in screen", () => {
        expect.assertions(3)
        expect(wrapper.text()).toBe("Text")
        expect(id).toBeTruthy();
        expect(id).toBe(true)
    })
})