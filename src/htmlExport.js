import * as fs from 'fs';
import * as _ from 'lodash';

export default class HtmlExport {
  constructor(colors) {
    this.colors = colors;
    this.skeletonFile = './data/skeleton.html';
    this.skeletonHtmlContent = '';
    this.colorHtmlContent = '';
    this.readFile();
  }
  readFile() {
    this.skeletonHtmlContent = fs.readFileSync(this.skeletonFile, {
      encoding: 'utf8'
    });
  }
  createFile(filename) {
    let buildFile = './build/' + filename + '.html';
    let colorHtmlContent = '';
    _.forEach(this.colors, function(color) {
      colorHtmlContent = colorHtmlContent + '<div class="color"><span style="background:' + color + '" class="color-demo"></span><span class="color-name">' + color + '</span></div>';
    });
    var content = _.replace(this.skeletonHtmlContent, '--content--', colorHtmlContent);
    fs.writeFileSync(buildFile, content);
    return content;
  }
  html(filename = 'flatuicolors') {
    this.createFile(filename);
    return true;
  }
};
