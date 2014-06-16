'use strict';

var childProcess = require( 'child_process' );
var path = require( 'path' );
var phantomjs = require( 'phantomjs' );

var binPath = phantomjs.path;

var childArgs = [
  path.join( __dirname, 'healthrx.js' ),
  '80085'
];

childProcess.execFile( binPath, childArgs, function( err, stdout, stderr ) {
  console.log( err, stdout, stderr );
});
