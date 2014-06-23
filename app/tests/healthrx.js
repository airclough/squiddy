'use strict';

var page = require( 'webpage' ).create();
var system = require( 'system' );

var dirname = system.args[ 1 ];

// page includes
var scripts = [
  'http://localhost:10101/js/tests/phantom-reporter.js',
  'https://cdnjs.cloudflare.com/ajax/libs/mocha/1.20.1/mocha.js',
  'https://cdnjs.cloudflare.com/ajax/libs/chai/1.9.1/chai.js'
];

page.onConsoleMessage = function( msg ) {
  console.log( msg );
};

page.onLoadFinished = function( status ) {
  if( 'success' !== status ) phantom.exit();

  pageIncludes( scripts, function() {
    page.evaluate( function() {
      mocha.setup({
        ui: 'bdd',
        reporter: function( runner ) {
          new PhantomReporter( runner );
        }
      });

      var expect = chai.expect;

      describe( 'DOM tests', function() {
        var form = document.querySelector( '#opt_in_form' );

        it( 'is in the DOM', function() {
          expect( form ).to.not.equal( null );
        });
      });

      mocha.run();
    });

    // phantom.exit();
  });
};

page.open( 'https://orderhealthrx.com/HEALTHRX_004_MAS_CON_DUAL_1841_1843_ST8UP_05202014/' );

function pageIncludes( scripts, done ) {
  function series( script ) {
    if( script ) {
      page.includeJs( script, function() {
        return series( scripts.shift() );
      });
    } else {
      return done();
    }
  }

  series( scripts.shift() );
}
