import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe("Home component", () => {
    const wrapper= shallow(<Home  />)
    it("wrapper contains click event", () => {
        expect(wrapper.text()).not.toBe("Homes")
        expect(wrapper.contains(<p >I am a Graphic Designer and UI Designer.</p>)).toBe(true)
        const photo ="p"

    })
})