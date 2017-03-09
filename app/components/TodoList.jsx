var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    /*function renderTodos1() {
      return todos.map(function(todo){
        return(
          <Todo key={todo.id}/>
        );
      });
    }*/

    var renderTodos = () => {
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    }

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
