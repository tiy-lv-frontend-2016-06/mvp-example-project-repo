import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>I'm in layout</h1>
        {this.props.children}
      </div>
    )
  }
})