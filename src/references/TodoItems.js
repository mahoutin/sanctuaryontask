import React, { Component } from 'react'
import "../item.css";
export default class TodoItems extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }
    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className=" itembtn" onClick={this.editTask.bind(this)}>Save</button>
                    <button className="cancel-btn itembtn" onClick={this.setEditState.bind(this, false)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button className=" itembtn"onClick={this.setEditState.bind(this, true)}>Edit</button>
                <button className="delete-btn itembtn" onClick={this.deleteTask.bind(this)}>Delete</button>
            </td>
        );
    }

    renderTask () {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input className="editinput" ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }

        return (
            <td onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</td>
        );
    }


    render () {
        const { isCompleted } = this.props;
        return (
            <tr className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                {this.renderTask()}
                {this.renderActionSection()}
            </tr>
        )
    }

    setEditState (isEditing) {
        this.setState({
            isEditing
        });
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    editTask (e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }
}

