import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
  render() {
    const { done, name } = this.props;
    return (
      <div className={done ? 'done' : 'notDone'}>
        <input type="checkbox" checked={done} onChange={this.handleCheck} />
        <span>{name}</span>
        <button className="delete" onClick={this.deleteItem}>
          Delete
        </button>
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.name);
  };

  deleteItem = (e) => {
    const del = e.target.checked;
    this.props.onDelete(del, this.props.name);
  };
}
