var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('Should exist', () => {
      expect(TodoList).toExist();
    });

    it('Should display all Todos to TodoList', () => {
      var todos = [
        {
          id: 1,
          text: 'dummy todo 1'
        },
        {
          id: 2,
          text: 'dummy todo 2'
        }
      ];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

      expect(todoComponents.length).toBe(todos.length);
    });

    it('Should display message when no Todo display', () => {
      var todos = [];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));

      expect($el.find('.container__message').length).toBe(1);
    });
});
