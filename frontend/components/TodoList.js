import React from "react";
// import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Todos</h1>

        <ul>
          <li>Feed My Guinea Pigs</li>
          <li>Feed My Wife</li>
          <li>Finish BloomWork</li>
        </ul>

        <form>
          <label></label>
          <button onClick={this.handleSubmit}>Add Todo</button>
          <button onClick={this.handleAdd}>Add Todo</button>
          <button>Add</button>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

//       <div>
//         <ul>
//           {this.props.todoList.map(todo => {
//             return (
//               <Todo key={todo.id} todo={todo} handleToggle={this.props.handleToggle}/>
//             )
//           }
//           )}
//         </ul>
//       </div>
//     )
//   }
// }
