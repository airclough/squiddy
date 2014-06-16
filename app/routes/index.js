'use strict';

// tests
// require( '../tests/phantom' )( '80085' );

// seeds
// require( '../seeds/campaigns' );

var campaignsController = require( '../controllers/campaigns' );
var testsController = require( '../controllers/tests' );

module.exports = function( app ) {
  app.get( '/api/campaigns/:id', campaignsController.readOne );
  app.get( '/api/tests/:id', testsController.readOne );
  app.post( '/api/tests', testsController.create );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
