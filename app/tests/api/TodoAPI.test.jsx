var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exists', () => {
    expect(TodoAPI).toExist();
  });

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
      var todos = [{
        id: 11,
        text: 'test text',
        compleated: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
