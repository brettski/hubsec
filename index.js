'use strict'

const dotenv = require('dotenv')


dotenv.config()

const run = () => {
    const bcs = process.env.BRETT_SECRET
    console.log('bcs', bcs)
}

module.exports = {
    run
}