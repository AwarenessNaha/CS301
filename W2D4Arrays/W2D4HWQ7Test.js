"use strict";

const fun = require("./W2D4HWQ7.js");
const assert = require("assert");

/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("filterRange", function () {

    it("filterRange test No.1", function () {
        assert.strictEqual(fun.filterRange([1, 2, 3, 4, 5, 6, 7, 88, 99,], 3, 7), [3, 4, 5, 6, 7]);
    });
    it(" filterRange test No.2", function () {
        assert.strictEqual(fun.filterRange([11, 22, 33, 44, 55, 66, 888], 33, 55), [33, 44, 55]);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is PI", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * Math.PI);
    });

});