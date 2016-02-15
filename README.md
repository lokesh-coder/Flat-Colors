Flat UI Colors
===================

Hand picked **2109** Flat colors for your next project.

####Install
```
npm install --save flat-ui-colors
npm install --global flat-ui-colors // for cli 
```

####Usage

```javascript
var flatUiColors = require('flat-ui-colors').default; //or
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

```shell
// WIP

//list all colors
flatc --all

//list random color
flatc --one

//list random number of colors
flatc --many 22

//export as html
flatc --all --html <filename>
flatc --many 34 --html <filename>
```
