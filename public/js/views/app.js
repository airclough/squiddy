define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      el: '#app',

      template: function() {
        return ''
          + '<div id="sidebar"></div>'
          + '<div id="main"></div>';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      }
    });
  }
);
