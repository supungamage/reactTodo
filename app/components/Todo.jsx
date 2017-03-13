var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id,text,compleated,createdAt,compleatedAt} = this.props;
    var todoClassName = compleated ? 'todo todo-completed' : 'todo';

    var renderDate = function() {
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
          this.props.onToggle(id);
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

module.exports = Todo;
