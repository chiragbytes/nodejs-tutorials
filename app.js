const _ = require('lodash')
const items = [1,[2,3],4,[5,6]];

const flattenArr = _.flattenDeep(items);
console.log(flattenArr);