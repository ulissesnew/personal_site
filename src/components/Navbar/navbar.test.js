import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe("Navbar component", () => {
    const navbar = shallow(<Navbar />)

    it("Navbar contains John Doe", () => {
        expect(navbar.text()).not.toBe("Homes")
        expect(navbar.find("h2").text()).toBe("John Doe .")
    })
})