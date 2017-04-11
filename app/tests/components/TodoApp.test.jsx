var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configStore = require('configStore');
var TodoApp = require('TodoApp');
//var TodoList = require('TodoList');
import TodoList from 'TodoList';

describe('TodoApp', () => {
    it('Should exist', () => {
      expect(TodoApp).toExist();
    });

    it('Should render TodoList', () => {
      var store = configStore.configure();
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp/>
        </Provider>
      );

      var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

      expect(todoList.length).toEqual(1);
    });
});
