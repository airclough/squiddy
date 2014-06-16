define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      template: function() {
        return ''
          + '<div class="header cf">'
            + '<h2>CID: ' + this.model.id + '</h2>'
            + '<div class="btn-orange">run test</div>'
          + '</div>';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      }
    });
  }
);
