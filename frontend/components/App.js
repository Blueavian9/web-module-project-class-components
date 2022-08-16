import React from 'react'
import { date } from 'yup/lib/locale';
import Form from './Form';
import TodoList from './TodoList';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ]
    };
  }


  handleClear = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return todo.completed === false;
      })
  });
  }

  handleAdd = (task) => {
    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    });
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === clickedId) {
          return {...todo, completed: !todo.completed}
        }
          return todo
      })
    })
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <h2>Todos:</h2>
        <TodoList handleToggle={this.handleToggle} todoList={todoList}/>
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}