'use strict';

const DataModel = require('../memory.js');

class Categories extends DataModel {
  /**
   *Creates an instance of Categories.
   * @memberof Categories
   */
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
    };
  }
}

module.exports = Categories;
