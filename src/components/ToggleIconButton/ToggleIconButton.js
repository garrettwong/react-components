import React, { Component, PropTypes } from 'react';
import IconButton from './IconButton';

class ToggleIconButton extends Component {
  constructor() {
    super();
    this.state = { toggleOn: false };
  }

  handleToggle = (evt) => {
    console.log("working",this);

    console.log(this.state.toggleOn)

    //this.state = { toggleOn: !this.state.toggleOn };
    this.setState({ toggleOn: !this.state.toggleOn })
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        {this.state.toggleOn.toString()}
        <IconButton onButtonClicked={this.handleToggle} />
      </div>
    )
  }
}

export default ToggleIconButton;