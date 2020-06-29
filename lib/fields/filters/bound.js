'use strict'

var FieldError = require('../../errors').FieldError


/**
 * In filter
 *
 * @see http://druid.io/docs/0.6.120/Filters.html
 *
 * @param {string} dimension Dimension to which filter is applied
 * @param {*} values Values to match
 */
module.exports = function(dimension, lower = null, upper = null, lowerStrict = false, upperStrict = false, ordering = 'lexicographic', extractionFn = null) {
  if (!dimension) {
    throw new FieldError('Dimension is not specified')
  }

  this.dimension = dimension
  this.lower = lower
  this.upper = upper
  this.lowerStrict = lowerStrict
  this.upperStrict = upperStrict
  this.ordering = ordering
  this.extractionFn = extractionFn
}
