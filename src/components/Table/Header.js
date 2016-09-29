import React, { Component, PropTypes } from 'react';

class TableHeader extends Component {
  
  static propTypes = {
      headers: PropTypes.array
  };

  render() {
    return (
        <thead>
            <tr>
                {this.props.headers.map(function(item) {
                    return <th>{item}</th>;
                })}
            </tr>
        </thead>
    )
  }
}


export default TableHeader;