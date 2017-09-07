var main = require('./lib/main.js')

const realArgs = [...process.argv].slice(2)

main.default(realArgs)
