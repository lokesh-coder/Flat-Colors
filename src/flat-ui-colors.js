import {
  colors
}
from '../data/colors';
import HtmlExport from './htmlExport';
import Fetch from './fetch';

let flatUiColors = {
  export: (new HtmlExport(colors)),
  get: (new Fetch(colors))
};

export default flatUiColors;
