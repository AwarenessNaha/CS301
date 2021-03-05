// eslint-disable-next-line strict
"use strict";

const fun = require("./W2D4HWQ6.js");
const assert = require("assert");

describe("filterNegative", function () {

    it("Test 1: After filter negative number", function () {
        assert.strictEqual(fun.filterNegative([1, -1, 2, -2, 3, -3, 4, -4]), [1, 2, 3, 4]);
    });
    it(" Test 1: After filter negative number", function () {
        assert.strictEqual(fun.filterNegative([9, -9, 8, -8, 7, -7, 6, -6, 5, -5]), [9, 8, 7, 6, 5]);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * Math.PI);
    });

});