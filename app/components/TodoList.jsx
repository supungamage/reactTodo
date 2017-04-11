var React = require('react');
var {connect} = require('react-redux');

var TodoAPI = require('TodoAPI');
//var Todo = require('Todo');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos, showCompleated, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleated, searchText).map((todo) => {
        return(
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
