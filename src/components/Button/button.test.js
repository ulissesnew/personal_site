import React from 'react';
import Button from './Button';

import { shallow } from 'enzyme';

describe("Button component", () => {
    const button = shallow(<Button text="Home" url="home"/>)
    const click = button.simulate("click");

    it("button render in screen", () => {
        expect(button.text()).not.toBe("Homes")
        expect(button.text()).toBe("Home")
        expect(click.props().href).toBe("home")
        expect(click.props().href).not.toBe("about")
    })
})