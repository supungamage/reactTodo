var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('Should exist', () => {
      expect(TodoApp).toExist();
    });

    it('Should add todo when handleAddTodo called with new todo', () => {
      var newText = 'test text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: []});

      todoApp.handleAddTodo(newText);
      expect(todoApp.state.todos[0].text).toBe(newText);

      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('Should call handleToggle when todo is clicked', () => {
      var todoData = {
        id: 11,
        text: 'test todo',
        compleated: false,
        createdAt: 0,
        compleatedAt: undefined
      };
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].compleated).toBe(false);

      todoApp.handleToggle(todoData.id);
      expect(todoApp.state.todos[0].compleated).toBe(true);
      expect(todoApp.state.todos[0].compleatedAt).toBeA('number');
    });

    it('Should handleToggle remove compleated when todo is not completed', () => {
      var todoData = {
        id: 11,
        text: 'test todo',
        compleated: true,
        createdAt: 0,
        compleatedAt: 123
      };
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].compleated).toBe(true);

      todoApp.handleToggle(todoData.id);
      expect(todoApp.state.todos[0].compleated).toBe(false);
      expect(todoApp.state.todos[0].compleatedAt).toNotExist();
    });
});
