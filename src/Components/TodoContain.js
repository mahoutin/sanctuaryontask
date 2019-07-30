import React, { Component } from "react";
// import { Modal, Button } from "react-bootstrap";
import { Card, Row, Col } from "reactstrap";

import TodoInput from "./TodoInput";
import uuid from "uuid";
import TodoList from "./TodoList";

export default class TodoContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="6">
            <Card body>
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-md-12 mt-4">
                    <p className="text-capitalize text-center">
                      Hello, {this.props.userName}
                    </p>
                  </div>
                </div>
              </div>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <div>
                <TodoList
                  items={this.state.items}
                  clearList={this.clearList}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
