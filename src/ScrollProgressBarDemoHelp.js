ScrollProgressBar.prototype.setColor = function(color) {
  this.options.color = color;

  var styleS =
    document.querySelector("style") ||
    document.getElementsByTagName("style")[0];

  styleS.parentNode.removeChild(styleS);

  this.start();
};
ScrollProgressBar.prototype.setOpacity = function(opacity) {
  this.options.opacity = opacity;

  var styleS =
    document.querySelector("style") ||
    document.getElementsByTagName("style")[0];

  styleS.parentNode.removeChild(styleS);

  this.start();
};
ScrollProgressBar.prototype.setPlacement = function(placement) {
  this.options.placement = placement;
  var styleS =
    document.querySelector("style") ||
    document.getElementsByTagName("style")[0];

  styleS.parentNode.removeChild(styleS);

  this.start();
};
ScrollProgressBar.prototype.setSize = function(size) {
  this.options.size = size;
  var styleS =
    document.querySelector("style") ||
    document.getElementsByTagName("style")[0];

  styleS.parentNode.removeChild(styleS);

  this.start();
};
