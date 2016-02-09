var uniqueRandomArray = require('unique-random-array');
var colorList = require('./color-list.json');

module.exports = {
	list: colorList,
	randomColor: uniqueRandomArray(colorList)
};