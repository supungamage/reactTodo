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
        text: 'add todo'
      };
      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('Should status flipp when toggling todo', () => {
      var todoList = [
        {
          id: 1,
          text: 'text',
          compleated: true,
          createdAt: 123,
          compleatedAt: 125
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todoReducer(df(todoList), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].compleated).toEqual(!(todoList[0].compleated));
      expect(res[0].compleatedAt).toNotExist();
    });
  });
});
