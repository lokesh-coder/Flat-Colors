#!/usr/bin/env node
var flatUiColors=require('../dist/flat-ui-colors.js').default;
var program =require('commander');

program
  .version('2.0.4')
  .option('-a, --all', 'List all colors')
  .option('-o, --one', 'List random color')
  .option('-m, --many [count]', 'List random number of colors')
  .option('-h, --html [name]', 'Export as html')
  .option('-c, --collection [name]', 'Get collection')
  .parse(process.argv);

if(program.all)
  console.log(flatUiColors.get.all());
else if(program.one)
  console.log(flatUiColors.get.one());
else if(program.many)
  console.log(flatUiColors.get.many(parseInt(program.many)));
else if(program.html)
  flatUiColors.export.html(program.html);
else if(program.collection)
	flatUiColors.collection.get(program.collection);