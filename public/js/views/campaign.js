define(
  [ 'backbone',
    'events',
    'models/test' ],
  function( Backbone, events, TestModel ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      events: {
        'click .run': 'runTest'
      },

      template: function() {
        return ''
          + '<div class="header cf">'
            + '<h2>' + this.model.get( 'brand' ) + '</h2>'
            + '<div class="run btn-orange">run test</div>'
          + '</div>';
      },

      initialize: function() {
        this.listenTo( this.model, 'change', this.render );
        this.model.fetch();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      },

      runTest: function() {
        this.testModel = new TestModel( { campaignID: this.model.get( 'id' ) } );
        this.listenTo( this.testModel, 'sync', this.fireHashChange );
        this.testModel.save();
      },

      fireHashChange: function( model ) {
        console.log( this.testModel );
        console.log( this.testModel.get( '_id' ) );
        events.trigger( 'router:hashChange', 'tests/' + this.testModel.get( '_id' ) );
      }
    });
  }
);
