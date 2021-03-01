
import React from 'react';
import Image from './Image';

import { shallow } from 'enzyme';

describe("Image component", () => {
    const wrapper = shallow(<Image url="a" />)
    it("Image contains url", () => {
        expect.assertions(2);
        expect(wrapper.props().src).toBe("a")
        expect(wrapper.props().src).not.toBe("")
    })
})