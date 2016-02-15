import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

export default class HtmlExport {
  constructor(colors) {
    this.colors = _.shuffle(colors);
    this.skeletonFile = path.resolve(__dirname, '..', 'data/skeleton.html');
    this.buildDir = path.join(process.cwd(), 'flatcolors');
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

    if (!fs.existsSync(this.buildDir)) {
      fs.mkdirSync(this.buildDir);
    }
    let buildFile = path.join(this.buildDir, filename + '.html');
    let colorHtmlContent = '';
    _.forEach(this.colors, function(color) {
      colorHtmlContent = colorHtmlContent + '<div class="color"><span style="background:' + color + '" class="color-demo"></span><span class="color-name">' + color + '</span></div>';
    });
    var content = _.replace(this.skeletonHtmlContent, '--content--', colorHtmlContent);
    fs.writeFileSync(buildFile, content);
    return buildFile;
  }
  html(filename = 'flatuicolors') {
    return this.createFile(filename);
  }
};
