import * as fs_ from 'fs';
import * as path_ from 'path';
import * as _ from 'lodash';

export default class HtmlExport {
  constructor(colors) {
    this.colors = _.shuffle(colors);
    this.skeletonFile = path_.resolve(path_.dirname(__filename), '..', 'data/skeleton.html');
    this.buildDir = path_.join(process.cwd(), 'flatcolors');
    this.skeletonHtmlContent = '';
    this.colorHtmlContent = '';
    this.readFile();
  }
  readFile() {
    this.skeletonHtmlContent = fs_.readFileSync(this.skeletonFile, {
      encoding: 'utf8'
    });
  }
  createFile(filename) {

    if (!fs_.existsSync(this.buildDir)) {
      fs_.mkdirSync(this.buildDir);
    }
    let buildFile = path_.join(this.buildDir, filename + '.html');
    let colorHtmlContent = '';
    _.forEach(this.colors, function(color) {
      colorHtmlContent = colorHtmlContent + '<div class="color"><span style="background:' + color + '" class="color-demo"></span><span class="color-name">' + color + '</span></div>';
    });
    var content = _.replace(this.skeletonHtmlContent, '--content--', colorHtmlContent);
    fs_.writeFileSync(buildFile, content);
    return buildFile;
  }
  html(filename = 'flatuicolors') {
    return this.createFile(filename);
  }
};
