export default class Collection {
  constructor(collection) {
    this.collection = collection;
  }
  all() {
    return this.collection;
  }
  get(name = 'all') {
    if (name == 'all') {
      return this.all();
    }
    return this.collection.palette[name];
  }
};
