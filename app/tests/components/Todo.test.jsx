var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('Should exist', () => {
      expect(Todo).toExist();
    });

    it('Should call onToggle prop when todo is clecked', () => {
      var todoData = {
        id: 111,
        text: 'test data',
        compleated: false
      };
      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todo));

      TestUtils.Simulate.click($el[0]);

      expect(spy).toHaveBeenCalledWith(todoData.id);
    })
});
