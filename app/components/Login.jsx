import React from 'react';

export var Login = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="page-title">Todo App</h1>

        <did className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account bellow.
              </p>
              <button className="button">Login with Github</button>
            </div>
          </div>
        </did>
      </div>
    );
  }
});

export default Login;
