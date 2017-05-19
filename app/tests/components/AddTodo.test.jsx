var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');
import * as actions from 'actions';

describe('AddTodo', () => {
    it('Should exist', () => {
      expect(AddTodo).toExist();
    });

    it('Should dispatch ADD_TODO when valid todo entered by startAddTodo', () => {
      var todoText = "test application";
      var action = actions.startAddTodo(todoText)
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('Should not dispatch ADD_TODO when invalid todo entered', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = "";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
});
