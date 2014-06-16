define(
  [ 'backbone',
    'models/test' ],
  function( Backbone, Test ) {
    'use strict';

    return Backbone.Collection.extend({
      model: Test,

      url: '/api/tests'
    });
  }
);
