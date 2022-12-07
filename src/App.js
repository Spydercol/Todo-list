import React from 'react';
import './Todo.css';
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      todos: [
        {
          name: 'Убрать квартиру',
          done: true,
        },
        {
          name: 'Сделать домашнее задание',
          done: false,
        },
        {
          name: 'Встретиться с друзьями',
          done: false,
        },
        {
          name: 'Позвонить родителям',
          done: false,
        },
        {
          name: 'Приготовить завтрак',
          done: true,
        },
        {
          name: 'Приготовить ужин',
          done: false,
        },
        {
          name: 'Погулять с собакой',
          done: true,
        },
      ],
    };
  }

  render() {
    const { todos, name } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    const notdoneCount = todos.filter((todo) => todo.name).length;
    return (
      <div className="app">
        <h1>To do</h1>
        <div className="status">
          <div className="counter">All:{notdoneCount}</div>
          <div className="counter">Done:{doneCount}</div>
          <div className="counter">Left:{notdoneCount - doneCount}</div>
        </div>
        <div className="add">
          <input value={name} onChange={this.handleSetName} />
          <button onClick={this.handleAddTodo}>Add new todo</button>
        </div>
        {todos.map((todo) => (
          <Todo
            name={todo.name}
            done={todo.done}
            onDone={this.handleSetDone}
            onDelete={this.handleDeleteItem}
          />
        ))}
      </div>
    );
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddTodo = () => {
    const todo = {
      name: this.state.name,
      done: false,
    };
    this.setState({
      name: '',
      todos: this.state.todos.concat([todo]),
    });
  };

  handleSetDone = (done, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done } : todo
      ),
    });
  };
  handleDeleteItem = (i) => {
    let todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
      todos,
    });
  };
}

export default App;
