import React, { Component } from "react";
import Items from "./Items";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">
            Here is your task list
          </h3>

          {items.map(item => {
            return (
              <Items
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}

          <button
            onClick={clearList}
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
