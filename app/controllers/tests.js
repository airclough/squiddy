'use strict';

module.exports = ( function() {
  function create( req, res ) {
    require( '../tests/phantom' )( '80085' );
    res.json( { _id: '80085' } );
  }

  function readOne( req, res ) {
    res.json({
      _id: req.params.id,
      campaignID: '1841'
    });
  }

  return {
    create : create,
    readOne: readOne
  };
})();
