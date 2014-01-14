/* global
  module: false
*/

var gutil  = require( 'gulp-util' );
var map    = require( 'map-stream' );
var path   = require( 'path' );
var crypto = require( 'crypto' );

var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-bushcaster';

module.exports = function ( obj ) {
  'use strict';

  function hash( file, cb ) {
    if ( ! obj ) {
      throw new PluginError( PLUGIN_NAME, 'obj missing' );
    }

    var dir      = path.dirname( file.path );
    var ext      = path.ext( file.path );
    var filename = path.basename( file.path, ext );
    var checksum = crypto.md5( file.content );

    file.path = path.join( dir, filename + checksum + ext );

    cb( null, file );
  }

  return map( hash );
};
