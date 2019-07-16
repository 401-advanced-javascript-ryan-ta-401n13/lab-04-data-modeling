'use strict';

const DataModel = require('../file.js');

class People extends DataModel {
  /**
   *Creates an instance of People.
   * @memberof People
   */
  constructor() {
    let dataFile = `${__dirname}/db.json`;
    super(dataFile);
  }

  /**
   *
   *
   * @returns
   * @memberof People
   */
  schema() {
    return {
      id: { required: true, type: 'string' },
      firstName: { required: true, type: 'string' },
      lastName: { required: true, type: 'string' },
      age: { required: true, type: 'number' },
    };
  }

  /**
   *
   *
   * @static
   * @returns
   * @memberof People
   */
  static sampleRecord() {
    return {
      firstName: 'Test',
      lastName: 'User',
      age: 50,
    };
  }
}

module.exports = People;
