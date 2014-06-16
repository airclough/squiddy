define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      template: function() {
        return ''
          + '<div class="header cf">'
            + '<h2>' + this.model.get( 'brand' ) + '</h2>'
            + '<div class="btn-orange">run test</div>'
          + '</div>';
      },

      initialize: function() {
        this.listenTo( this.model, 'change', this.render );
        this.model.fetch();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      }
    });
  }
);
