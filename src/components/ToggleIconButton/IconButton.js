import React, { Component, PropTypes } from 'react';

class IconButton extends Component {
  static propTypes = {
    onButtonClicked: PropTypes.func,
  };

  render() {
    return (
        <input type="button" onClick={this.props.onButtonClicked} value="Toggle" />
    )
  }
}

export default IconButton;