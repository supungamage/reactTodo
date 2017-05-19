import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startUpdateTodo = (id, compleated) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      compleated,
      compleatedAt: compleated ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child('todos');
    return todoRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var passedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        passedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(passedTodos));
    }, (e) => {
      console.log('Unable to get data');
    });
  };
};

//since this return function who is going to call this ?? is that redux-thunk ??
export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      compleated: false,
      createdAt: moment().unix(),
      compleatedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};
