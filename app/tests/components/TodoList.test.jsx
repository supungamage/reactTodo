var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configStore';
//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
//var Todo = require('Todo');

describe('TodoList', () => {
    it('Should exist', () => {
      expect(TodoList).toExist();
    });

    it('Should display all Todos to TodoList', () => {
      var todos = [
        {
          id: 1,
          text: 'dummy todo 1',
          compleated: false,
          createdAt: 500,
          compleatedAt: undefined
        },
        {
          id: 2,
          text: 'dummy todo 2',
          compleated: false,
          createdAt: 500,
          compleatedAt: undefined
        }
      ];

      var store = configure({
        todos
      });
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
      );
      var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

      expect(todoComponents.length).toBe(todos.length);
    });

    it('Should display message when no Todo display', () => {
      var todos = [];

      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));

      expect($el.find('.container__message').length).toBe(1);
    });
});
