import React from 'react'
s
export default class Form extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }

  onChange = evt => {
    const { value, id } = evt.target;
    this.props.onChange{id, value}
  }
    
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          id="textInput"
          placeholder="type text"
          value={this.props.textInput}
          onChange={this.onChange}
        />
        <input
          type="text"
          id="textInput"
          placeholder="type text"App.js
          value={this.props.textInput}
          onChange={this.onChange}
        />
        <input type="submit" />
      </form>
    )
  }
}
