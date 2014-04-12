// YOUR CODE GOES HERE
$(document).ready(function() {
var Tile = function(val){
  this.value = val;
  this.$el = $('<span>' + val + '</span>');

  this.$el.on('click', this.flip.bind(this));
};

Tile.prototype.flip = function(){
  this.$el.toggleClass('flipped');
  
};

var myTile1 = new Tile('foo');
  $('td.first').append(myTile1.$el);

var myTile2 = new Tile('foo');
  $('td.second').append(myTile2.$el);

var myTile3 = new Tile('foo');
  $('td.third').append(myTile3.$el);

var myTile4 = new Tile('foo');
  $('td.fourth').append(myTile4.$el);

});