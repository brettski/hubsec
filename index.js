'use strict'

const dotenv = require('dotenv')


dotenv.config()

const run = () => {
    const bcs = process.env.BRETT_SECRET
    console.log('bcs', bcs)
    console.log('b64',Buffer.from(bcs).toString('base64'))
    const b64 = Buffer.from(bcs).toString('base64')
    console.log(`b64 value: ${b64}`)
    console.log('back to utf-8 direct', Buffer.from(b64, 'base64').toString('utf-8'))
    const b8 = Buffer.from(b64, 'base64').toString('utf-8')
    console.log('back to utf-8 variable', b8)
    const sum = (parseInt(bcs) + 22 - 2)
    console.log('sum', sum)
    return sum
}

module.exports = {
    run
}
