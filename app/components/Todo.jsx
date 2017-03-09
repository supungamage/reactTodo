var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id,text,compleated} = this.props;
    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={compleated}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
