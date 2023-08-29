// see: https://jestjs.io/docs/next/webpack#mocking-css-modules
const path = require('path')

module.exports = {
    process(_src, filename) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`
    }
}
