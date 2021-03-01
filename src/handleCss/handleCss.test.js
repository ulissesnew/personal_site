import React from 'react';
import { shallow } from 'enzyme';
import {sizeImage, borderRadius, joinClassName} from './handleCss';

describe("handleCss component", () => {
    it("sizeImage return size", () => {
       expect(sizeImage("s")).toBe("small");
       expect(sizeImage("m")).toBe("medium");
       expect(sizeImage("l")).toBe("large");
       expect(sizeImage("")).toBe(null);
       expect(sizeImage("10px")).not.toBe("medium");
    })
    it("borderRadius return radius", () => {
        expect(borderRadius(true)).toBeTruthy();
        expect(borderRadius()).toBe(null);
        expect(borderRadius(10)).toBe(null);
    })
    it("joinClassName return params withing array", () => {
        const word = ["ta","ble"];
        expect(joinClassName(word.length)).toEqual("2 ");
        expect(joinClassName(word)).toBe("ta,ble ");
        expect(joinClassName(word)).not.toBe("word");
    })
})