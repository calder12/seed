var path = require('path');
var pathfinder = require('sass-pathfinder');

var css = pathfinder(
  path.join(__dirname, 'src/_assets/stylesheets/main')
);

module.exports = {
  css: css
};
