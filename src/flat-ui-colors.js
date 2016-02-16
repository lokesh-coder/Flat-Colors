import {
  colors
}
from '../data/colors';
import HtmlExport from './html-export';
import Fetch from './fetch';

let flatUiColors = {
  export: (new HtmlExport(colors)),
  get: (new Fetch(colors))
};

export default flatUiColors;
