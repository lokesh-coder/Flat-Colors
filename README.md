Flat UI Colors
===================

Hand picked **2109** Flat colors for your next project.

####Install
```
npm install --save flat-ui-colors -g
```

####Usage

```
var flatUiColors=require('flat-ui-colors').default; //or
import flatUiColors from 'flat-ui-colors'; //for es6 modules

//list all colors
flatUiColors.get.all();

//list random color
flatUiColors.get.many(); // returns one color

//list random number of colors
flatUiColors.get.many(5); //returns 5 colors

//export colors to a nice looking html page :)
flatUiColors.export.html(); // or with a filename
flatUiColors.export.html('filename');
```
