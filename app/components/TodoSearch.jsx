var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleated = this.refs.showCompleated.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleated, searchText);
  },
  render: function() {
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleated" onChange={this.handleSearch}/>
            Show compleated todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
