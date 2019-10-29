'use strict'

const {expect} = require('chai')
const {run} = require('../index')

describe('Run, run', function() {
    const v = run()
    it ('Should equal value', function() {
        expect(v == 131)
    })
    it ('should not equal value', function() {
        expect(v != 133)
    })
})