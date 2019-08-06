'use strict'

var FieldError = require('../../errors').FieldError


/**
 * Cardinality aggregator
 *
 * @see http://druid.io/docs/0.6.120/Aggregations.html
 *
 * @param {string[]} fieldNames Fields to compute cardinality over
 * @param {boolean} [byRow=false] If we should compute cardinality over distinct combinations
 * @param {boolean} [round=false] whether the value will be rounded
 */
module.exports = function cardinality(fieldNames, byRow, round) {
  if (!fieldNames || !fieldNames.length) {
    throw new FieldError('Missing field names')
  }

  this.fieldNames = fieldNames
  this.byRow = byRow || false
  this.round = round || false
}
