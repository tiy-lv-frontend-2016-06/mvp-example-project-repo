import React from 'react';
import { deleteItem } from 'api/todo';
import ContentDelete from 'material-ui/svg-icons/action/delete'
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

export default React.createClass({
  iconButton: function () {
    return (
      <IconButton touch={true} onTouchTap={this.deleteItem}>
        <ContentDelete />
      </IconButton>
    )
  },
  deleteItem: function (e) {
    deleteItem(this.props.id);
  },
  render: function () {
    return (
      <ListItem primaryText={this.props.text} rightIconButton={this.iconButton()} />
    )
  }
});