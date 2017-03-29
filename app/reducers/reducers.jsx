var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          compleated: false,
          createdAt: moment().unix(),
          compleatedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          var nextCompleted = !todo.compleated;
          return {
            ...todo,
            compleated: nextCompleted,
            compleatedAt: nextCompleted ? moment.unix() : undefined
          };
        }
        return todo;
      });
    default:
      return state;
  };
};
