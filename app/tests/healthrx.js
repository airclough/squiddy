'use strict';

var page = require( 'webpage' ).create();
var system = require( 'system' );

var s4 = system.args[ 1 ];
console.log( s4 );

page.open( 'https://orderhealthrx.com/HEALTHRX_004_MAS_CON_DUAL_1841_1843_ST8UP_05202014/', function() {
  setTimeout( function() {
    phantom.exit();
  }, 5000 )
});
