var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleated: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [...this.state.todos,
        {
          id: uuid(),
          text: text,
          compleated: false,
          createdAt: moment().unix(),
          compleatedAt: undefined
        }
      ]
    });
  },
  handleSearch: function(showCompleated, searchText) {
    this.setState({
      showCompleated: showCompleated,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(id === todo.id) {
        todo.compleated = !todo.compleated;
        todo.compleatedAt = todo.compleated ? moment().unix() : undefined;
      }

      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function() {
    var {todos, showCompleated, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleated, searchText);
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
