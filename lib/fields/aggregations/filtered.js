'use strict'

var FieldError = require('../../errors').FieldError
var aggregations = require('../aggregations')

/**
 * JavaScript aggregator
 *
 * @see http://druid.io/docs/0.6.120/Aggregations.html
 *
 * @param {string[]} fieldNames Names of fields which are passed to aggregate function
 * @param {string|Function} aggregateFn Aggregation function
 */
module.exports = function filtered(aggregatorType, aggregationName, filter) {
  if (!aggregatorType || !aggregationName || !filter) {
    throw new FieldError('Some arguments ares missing (btw, all arguments are mandatory)')
  }
  this.aggregator = aggregations.aggregation(aggregatorType,aggregationName);
  this.filter = filter;
}
