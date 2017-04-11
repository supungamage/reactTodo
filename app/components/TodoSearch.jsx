var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function() {
    var {dispatch,showCompleated,searchText} = this.props;
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" value={searchText} placeholder="Search todos" onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleated" checked={showCompleated} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show compleated todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect((state) => {
  return {
    showCompleated: state.showCompleated,
    searchText: state.searchText
  };
})(TodoSearch);
