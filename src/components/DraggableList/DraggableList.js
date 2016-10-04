import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DraggableList.css';

class DraggableList extends Component {
  static propTypes = {
    rows: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = { data: this.props.rows };
  }

  dragStart = (e) => {
    this.dragged = e.currentTarget;

    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires dataTransfer data to be set
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  dragEnd = (e) => {
    this.dragged.style.display = 'block';

    const data = this.state.data;
    const from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (this.nodePlacement == 'after') to++;
    data.splice(to, 0, data.splice(from, 1)[0]);

    this.state = { data: data };
  }

  dragOver = (e) => {
    e.preventDefault();

    this.dragged.style.display = 'none';
    this.over = e.target;

    // Inside the dragOver method
    const relY = e.clientY - this.over.offsetTop;
    const height = this.over.offsetHeight / 2;
    const parent = e.target.parentNode;
  }

  render() {
    return (
      <ul onDragOver={this.dragOver}>
        {this.state.data.map(function (item, i) {
          return (<li
            data-id={i}
            key={i}
            draggable="true"
            onDragEnd={this.dragEnd}
            onDragStart={this.dragStart}
            >
            {item} {JSON.stringify(this.state)}
          </li>)
        },
        this) }
      </ul>
    );
  }

}

export default withStyles(s)(DraggableList);