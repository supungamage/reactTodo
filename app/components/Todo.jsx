var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {id,text,compleated,createdAt,compleatedAt,dispatch} = this.props;
    var todoClassName = compleated ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = 'Created :';
      var time = createdAt;

      if(compleated) {
        message = 'Completed :';
        time = compleatedAt;
      }

      return message + moment.unix(time).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startUpdateTodo(id, !compleated));
        }}>
        <div>
          <input type="checkbox" checked={compleated}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
