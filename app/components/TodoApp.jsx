var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleated: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          compleated: true
        },
        {
          id: uuid(),
          text: 'clean the gardern',
          compleated: false
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
          text: text,
          compleated: false
        }
      ]
    });
  },
  handleSearch: function(showCompleated, searchText) {
    this.setState({
      showCompleated: showCompleated,
      searchText: searchText
    })
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(id === todo.id) {
        todo.compleated = !todo.compleated;
      }

      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function() {
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
