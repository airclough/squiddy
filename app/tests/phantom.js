'use strict';

var childProcess = require( 'child_process' );
var path = require( 'path' );
var phantomjs = require( 'phantomjs' );

var binPath = phantomjs.path;

module.exports = function( s4 ) {
  var childArgs = [
    path.join( __dirname, 'healthrx.js' ),
    s4
  ];

  var spawn = childProcess.spawn( binPath, childArgs );
  spawn.stdout.on( 'data', function( data ) {
    console.log( data );
  });
};
