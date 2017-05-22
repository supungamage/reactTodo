var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('Should exist', () => {
      expect(Todo).toExist();
    });

    it('Should dispatch startUpdateTodo/UPDATE_TODO action when todo is clicked', () => {
      var todoData = {
        id: 111,
        text: 'test data',
        completed: true
      };
      var action = actions.startUpdateTodo(todoData.id, !todoData.completed);

      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todo));

      TestUtils.Simulate.click($el[0]);

      expect(spy).toHaveBeenCalledWith(action);
    });
});
