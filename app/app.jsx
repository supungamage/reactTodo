var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 project</p>,
  document.getElementById('app')
);
