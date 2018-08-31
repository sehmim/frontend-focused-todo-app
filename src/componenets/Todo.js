import React, { Component } from "react";
import List from "../componenets/List";
import "../App.css";

import { Button } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import DragSortableList from 'react-drag-sortable'


class Todo extends Component {
  state = {
    input: "",
    details: "",
    showEdit: false,
    list: []
  };

  inputHandle = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  inputHandleDetails = e => {
    e.preventDefault();
    this.setState({
      details: e.target.value
    });
  };

  submitTask = e => {
    e.preventDefault();
    const obj = {};
    this.setState({
      list: [...this.state.list,{ title: this.state.input, details: this.state.details }]
    });
  };

  deleteItem = (data, index) => {
    const newArray = [...this.state.list];
    newArray.splice(index, 1);

    this.setState({
      list: newArray
    });
  };

  showItem = index => {
    const newArray = [...this.state.list];
    newArray[index].show = !newArray[index].show;
    this.setState({
      list: newArray
    });
  };

  edit = index => {

  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className="Header">To Do App</h1>
            <form className="form-group" onSubmit={this.submitTask}>
              <div className="container">
              <TextField
                value={this.state.input}
                onChange={this.inputHandle}
                id="name"
                label="Task"
                className="form-control"
                margin="normal"
              />{" "}
              <br />
              <TextField
                id="multiline-flexible"
                label="Details"
                multiline
                rowsMax="4"
                value={this.state.details}
                onChange={this.inputHandleDetails}
                className="form-control"
                margin="normal"
              />
              <Button color="green" className="btn btn-success">
                <i class="material-icons">add_circle</i>
              </Button>
              </div> 
            </form>
            {
              this.state.list.length == 0 ?
              <h3 className="text">Add some tasks toDo</h3> :
              <List
                list={this.state.list}
                deleteItem={this.deleteItem}
                showItem={this.showItem}
                edit={this.edit}
            />
            }

            
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
