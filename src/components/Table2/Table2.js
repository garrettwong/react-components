/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Table2 extends Component {

  static propTypes = {
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  handleClick = (event) => {
    alert('hello');

    if (this.props.onClick) {
      this.props.onClick(event);
    }


  };

  render() {
    const { to, children, ...props } = this.props;

    return <div onClick={this.handleClick}>Good Game - {to}</div>;
  }

}

export default Table2;
