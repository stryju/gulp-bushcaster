/* global
  module: false
*/

var gutil  = require( 'gulp-util' );
var map    = require( 'map-stream' );
var path   = require( 'path' );
var crypto = require( 'crypto' );

module.exports = function ( obj ) {
  'use strict';

  function hash( file, cb ) {
    cb( null, file );
  }

  return map( hash );
};
