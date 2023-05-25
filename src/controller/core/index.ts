// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod')
// } else {
//   module.exports = require('./configureStore.dev')
// }
import dev from './configureStore.dev'
import prod from './configureStore.prod'
const core = process.env.NODE_ENV === 'production' ? prod : dev
export default core
