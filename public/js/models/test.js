define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.Model.extend({
      idAttribute: '_id',

      urlRoot: '/api/tests'
    });
  }
);
