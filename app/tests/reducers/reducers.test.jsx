var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('Should flipp showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todoReducer', () => {
    it('Should add todo to todos list', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          text: 'anything',
          completed: false,
          createdAt: 4000
        }
      };
      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('Should add todos to todos list in initial state', () => {
      var todos = [{
        id: 11,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 4000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('Should status flipp when toggling/updating todo', () => {
      var todoList = [
        {
          id: 1,
          text: 'text',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: 1,
        updates
      };
      var res = reducers.todoReducer(df(todoList), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todoList[0].text);
    });
  });
});
