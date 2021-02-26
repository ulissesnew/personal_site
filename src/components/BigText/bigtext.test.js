
import React from 'react';
import BigText from './BigText';

import { shallow } from 'enzyme';

describe("BigText component", () => {
    const wrapper = shallow(<BigText small="Home" title="About me"/>)
    it("wrapper render in screen", () => {
        expect(wrapper.find(".small").props().children).not.toBe("Homes")
        expect(wrapper.find(".title").props().children[0]).toBe("About me")
       
    })
})