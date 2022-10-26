const withPreact = require('next-plugin-preact')
const withTranspileModules = require('next-transpile-modules')

// module.exports = withTranspileModules(['@tba/storefront-framework'])(withPreact({
//   /* regular next.js config options here */
// }))

module.exports = withPreact({})
