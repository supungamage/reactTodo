var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export class TodoSearch extends React.Component {
  render () {
    var {dispatch,showcompleted,searchText} = this.props;
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
            <input type="checkbox" ref="showcompleted" checked={showcompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
};

export default connect((state) => {
  return {
    showcompleted: state.showcompleted,
    searchText: state.searchText
  };
})(TodoSearch);
