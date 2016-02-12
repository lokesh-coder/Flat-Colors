var _ = require('lodash');
var colorList = require('./color-list.json');
var file = require('easy-file');
var htmlColorContent = '';
var htmlFileContent = '';

file.read('export/flat-ui-colors.html', function(contents) {
	htmlFileContent = contents;
});

colorList = _.shuffle(colorList);

module.exports = {
	listAll: colorList,
	randomOne: _.sample(colorList),
	randomMany: function(count) {
		return _.sampleSize(_.shuffle(colorList), count);
	},
	randomManyExport: function(count) {
		_(this.randomMany(count)).forEach(function(color) {
			htmlColorContent = htmlColorContent + '<div class="color"><span style="background:' + color + '" class="color-demo"></span><span class="color-name">' + color + '</span></div>';
		});
		var content = _.replace(htmlFileContent, '--content--', htmlColorContent);
		file.write('flat-ui-colors.html', content);
		return content;
	},
};