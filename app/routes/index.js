'use strict';

// tests
require( '../tests/phantom' );

// seeds
// require( '../seeds/campaigns' );

var campaignsController = require( '../controllers/campaigns' );

module.exports = function( app ) {
  app.get( '/api/campaigns/:id', campaignsController.readOne );
  app.get( '*', function( req, res ) {
    res.render( 'index' );
  });
};
