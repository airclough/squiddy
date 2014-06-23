'use strict';

var page = require( 'webpage' ).create();
var system = require( 'system' );

var s4 = system.args[ 1 ];
console.log( s4 );

page.open( 'https://orderhealthrx.com/HEALTHRX_004_MAS_CON_DUAL_1841_1843_ST8UP_05202014/' );

page.onConsoleMessage = function( msg ) {
  console.log( msg );
};

page.onLoadFinished = function( status ) {
  if( 'success' !== status ) phantom.exit();

  page.includeJs( 'https://cdnjs.cloudflare.com/ajax/libs/mocha/1.20.1/mocha.js', function() {
    page.includeJs( 'https://cdnjs.cloudflare.com/ajax/libs/chai/1.9.1/chai.js', function() {
      var res = page.evaluate( function() {
        console.log( 'mocha:', mocha );
        console.log( 'chai:', chai );

        mocha.ui( 'bdd' );
        mocha.reporter( 'json' );

        var expect = chai.expect;

        describe( 'DOM tests', function() {
          var form = document.querySelector( '#opt_in_form' );

          it( 'is in the DOM', function() {
            expect( form ).to.not.equal( null );
          });
        });

        return mocha.run();
      });

      console.log( res );

      phantom.exit();
    });
  });
};
