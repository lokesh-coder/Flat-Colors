import _, {
  shuffle, isNumber, sampleSize
}
from 'lodash';

export default class Fetch {
  constructor(colors) {
    this.colors = _.shuffle(colors);
  }
  all() {
    return this.colors;
  }
  one() {
    return _.shuffle(this.colors)[0];
  }
  many(count = 1) {
    if (!_.isNumber(count)) {
      count = 1;
    }
    return _.sampleSize(_.shuffle(this.colors), count);
  }
};
