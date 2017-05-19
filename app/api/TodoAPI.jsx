var $ = require('jquery');

module.exports = {
  /*
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  }, */
  filterTodos: function(todos, showCompleated, searchText) {
    var filterTodos = todos;
    //filter by showCompleated
    filterTodos = filterTodos.filter((todo) => {
      return !todo.compleated || showCompleated;
    });
    //filer by searchText
    filterTodos = filterTodos.filter((todo) => {
      var todoText = todo.text.toLowerCase();
      return (searchText.length === 0 || todoText.indexOf(searchText) > -1);
    });

    //sort
    filterTodos.sort((a, b) => {
      if(!a.compleated && b.compleated) {
        return -1;
      } else if(a.compleated && !b.compleated) {
        return 1;
      } else {
        return 0;
      }
    });

    return filterTodos;
  }
}
