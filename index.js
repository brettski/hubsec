'use strict'

const dotenv = require('dotenv')


dotenv.config()

const run = () => {
    const bcs = process.env.BRETT_SECRET
    console.log('bcs', bcs)
    console.log('b64',Buffer.from(bcs).toString('base64'))
}

module.exports = {
    run
}