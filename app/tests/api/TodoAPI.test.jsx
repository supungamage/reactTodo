var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exists', () => {
    expect(TodoAPI).toExist();
  });
  /*
  describe('setTodos', () => {
    it('Should set todos with valid data', () => {
      var todos = [{
        id: 11,
        text: 'test text',
        compleated: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('Should not set todos with invalid data', () => {
      var todos = {text: 'bad data'};
      TodoAPI.setTodos(todos);

      var actualTodos = localStorage.getItem('todos');

      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('Should get todos when valid data is saved', () => {
      var todos = [{
        id: 11,
        text: 'test text',
        compleated: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

    it('Should not get todos when invalid data is saved', () => {
      var todos = {text: 'bad data'};
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });
  });
  */
  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'filter text 1',
      compleated: true
    },{
      id: 2,
      text: 'other text 2',
      compleated: false
    },{
      id: 3,
      text: 'filter text 3',
      compleated: true
    }];

    it('Should show all todos when showCompleated is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(todos.length);
    });

    it('Should show only completed todos when showCompleated is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('Should filter todos not completed todos come first', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].compleated).toBe(false);
    });

    it('Should filter by searchText is available', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, 'filter');
      expect(filterTodos.length).toBe(2);
    });

    it('Should not filter by searchText is not available', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(todos.length);
    });
  });
});
