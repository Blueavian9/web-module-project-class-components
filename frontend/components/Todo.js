import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h1>Todo {this.props.name}</h1>
        <ul>
          <li>Eat</li>
          <li>Program</li>
          <li>Sleep</li>
          <li>Repeat</li>
          <li>Create</li>
          <li>Read</li>
          <li>Upload</li>
          <li>Delete</li>
        </ul>
      </div>
    )
  }
}

// Example usage: <ShoppingList name="Cesar" />

    return React.createElement('div', {className: 'todo-list'},
      React.createElement('h1', null, this.props.name),
      React.createElement('ul', null, this.props.name),
      React.createElement('li', null, this.props.name),
      React.createElement('li', null, this.props.name),
      React.createElement('li', null, this.props.name),
      React.createElement('li', null, this.props.name),
      React.createElement('li', null, this.props.name),
      React.createElement('li', null, this.props.name)
    )
   )
  )
 )
);