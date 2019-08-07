import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateToDo from "./components/create-todo.comp";
import EditToDo from "./components/edit-todo.comp";
import TodoList from "./components/tasks-table-header.comp";
import TaskMasterNavBar from "./components/taskmaster-nav.comp";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <TaskMasterNavBar/>
          <br/>
          <Route path="/" exact component={TodoList}/>
          <Route path="/todos/" component={TodoList} />
          <Route path="/todos/:id" component={EditToDo} />
          <Route path="/create" component={CreateToDo} />
          <Route path="/delete/:id" component={EditToDo} />
        </div>
      
      </Router>
    );
  }
}
