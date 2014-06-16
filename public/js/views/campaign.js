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
        var testModel = new TestModel( { campaignID: this.model.get( 'id' ) } );
        this.listenTo( testModel, 'sync', this.fireHashChange );
        testModel.save();
      },

      fireHashChange: function( model ) {
        events.trigger( 'router:hashChange', 'tests/' + model.id );
      }
    });
  }
);
