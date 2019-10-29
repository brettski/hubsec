'use strict'

const {expect} = require('chai')
const {run} = require('../index')

describe('Run, run', function() {
    const v = run()
    it ('Should equal value', function() {
        expect(v === 131).to.be.true
    })
    it ('should not equal value', function() {
        expect(v === 133).to.be.false
    })
})