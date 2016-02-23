import {
  colors,
  collection
}
from '../data/colors';
import HtmlExport from './html-export';
import Fetch from './fetch';
import Collection from './collection';

let flatUiColors = {
  export: (new HtmlExport(colors)),
  get: (new Fetch(colors)),
  collection: (new Collection(collection))
};

export default flatUiColors;
