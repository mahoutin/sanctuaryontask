import React, { Component } from "react";
// import UserInput from "./Components/UserInput";
// import TodoDisplay from "./Components/TodoDisplay";
import "./App.css";
import Sanctlogo from "./images/sanctlogo.png";
import Clock from "./Components/Clock";
// import AddTodo from "./Components/AddTodo";
import "./add.css";

import PersonalDiplay from'./Components/PersonalDisplay';
import uuid from 'uuid'

// const todos = {
//   items: [],
//   lsKey: "todos",
//   populate () {
//       this.items = this.get();
//   },
//   get () {
//       try {
//           return JSON.parse(localStorage.getItem(this.lsKey)) || []
//       } catch (e) {}
//       return [];
//   },
//   save () {
//       localStorage.setItem(this.lsKey, JSON.stringify(this.items));
//   },
//   toggle (id) {
//       let todoItem = this.items[id];
//       todoItem.isCompleted = !todoItem.isCompleted;
//       this.save();
//   },
//   add (obj) {
//       this.items.push(obj);
//       this.save();
//   },
//   remove (id) {
//       this.items.splice(id, 1);
//       this.save();
//   },
//   update (id, task) {
//       let todoItem = this.items[id];
//       todoItem.task = task;
//       this.save();
//   }
// };

// todos.populate();

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
      // username: [{ name: "Alexander" }],
  //     modalShow: false,
  //     todos: todos.items,
  //     username: "Stranger"
  //   };
  // }

  // usernameChangeHandler = (event) => {
  //   this.setState({username:event.target.value})

  // }

  // UserNameHandler = event => {
  //   this.setState({ username: [{ name: event.target.value }] });
  // };

  render() {
    //let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
        <ul id="background" class="background">
          <li class="background-item fadein" />
        </ul>
        <div className="background-overlay show" />
        {/* <div>
          {" "}
          <button
            onClick={() => this.setState({ modalShow: true })}
            id="myButton"
            variant="outline-light"
            size="lg"
          >
            <p>+Add </p> */}
            {/* <i class="fas fa-plus-circle" /> */}
          {/* </button>
          <AddTodo 
          show={this.state.modalShow} onHide={modalClose} 
          createTask={this.createTask.bind(this)}
          changed={this.usernameChangeHandler}/>
        </div> */}

        <div className="App">
          <p className="logo">
            <img className="Titlelogo" src={Sanctlogo} alt="" />
          </p>
          <p className="content">
            <div className="app-container clock">
              <div className="defaut-clock">
                <div className="time">
                  <Clock />
                </div>
                <div className="textcontent">
                  <span>Welcome to The Sanctuary On Penn</span>
                </div>
              </div>
            </div>

            <div>
              {" "}
              <span>
                <div className="prompt center">
                  <div className="question">
                    {/* <span className="questionTitle">
                      Hello, what's your name?
                    </span> */}
                  </div>
                  <div>
                    {/* <UserInput
                      className="widthDynamic input"
                      spellcheck="false"
                    /> */}
                    <PersonalDiplay/>
                  </div>
                </div>
              </span>
            </div>
          </p>

          {/* 
          <div className="display">
            {" "}
            <UserOutput
              name={this.state.username[0].name}
              changed={this.state.UserNameHandler}
            />
          </div> */}
        </div>

        {/* <div>
          <TodoDisplay 
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)} 
          name={this.state.username}/>
        </div> */}
      </div>
    );
  }
//   createTask (task) {
//     task = task.trim();
//     if (!task) { return; }
//     todos.add({
//         task,
//         isCompleted: false
//     });
//     this.setState({ todos: this.state.todos });
// }

// toggleTask (taskId) {
//     todos.toggle(taskId);
//     this.setState({ todos: this.state.todos });
// }
// editTask (taskId, task) {
//     todos.update(taskId, task);
//     this.setState({ todos: this.state.todos });
// }
// deleteTask (taskId) {
//     todos.remove(taskId);
//     this.setState({ todos: this.state.todos });
// }
}
