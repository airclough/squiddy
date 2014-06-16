define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      template: function() {
        return ''
          + '<div class="header cf">'
            + '<h2>' + this.model.get( '_id' ) + '</h2>'
          + '</div>';
      },

      initialize: function() {
        this.listenTo( this.model, 'change', this.render );
        this.model.fetch();
      },

      render: function() {
        this.$el.html( this.template() );
        this.poll();
        return this;
      },

      poll: function() {
        var that = this;
        var to = setTimeout( function() {
          if( !that.model.get( 'complete' ) ) {
            that.model.fetch();
            that.poll();
          }

          clearTimeout( to );
        }, 2000 );
      }
    });
  }
);
