var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
//var AddTodo = require('AddTodo');
//var TodoSearch = require('TodoSearch');
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
  render: function() {
    var {todos, showCompleated, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleated, searchText);
    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
