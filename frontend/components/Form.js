import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }
  render() {
    return (
        <form >
          <label>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Add Todo</button>
            {/*<button onClick={this.handleAdd}>Add Todo</button>
            <button>Clear Completed</button>*/}
          </label>
        </form>
    )
  }
}