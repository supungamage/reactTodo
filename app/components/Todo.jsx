var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id,text,compleated,createdAt,compleatedAt} = this.props;

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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={compleated}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
