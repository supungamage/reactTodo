var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export class AddTodo extends React.Component {
  handeSubmit (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      var {dispatch} = this.props;
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }
  render () {
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.handeSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
