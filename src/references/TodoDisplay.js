import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
 
  Card,
  // CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

import "../add.css";
import TodoDisplayHeader from "./TodoDisplayHeader";
import TodoItem from "./TodoItems"

export default class TodoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  renderItems () {
    return this.props.todos.map((c, index) => {
        return (
            <TodoItem
                key={index}
                {...c}
                id={index}
                toggleTask={this.props.toggleTask}
                editTask={this.props.editTask}
                deleteTask={this.props.deleteTask}
            />
        )
    });
}

  render() {
    
    let modalClose = () => this.setState({ modalShow: false });
    
    return (
      <div>
        <button
          onClick={() => this.setState({ modalShow: true })}
          id="myButton"
          variant="outline-light"
          size="lg"
        >
          <p>View Task </p>
        </button>
        <div>
          {" "}
          <Modal
            className="modal"
            show={this.state.modalShow}
            onHide={modalClose}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Hello, {this.props.name} 
              </Modal.Title>
            </Modal.Header>
            
<table>
    <TodoDisplayHeader />
    <tbody>
  
       
            <Modal.Body>
              <Row>
                <Col sm="6" id="employee">
                  <Card body>
                    {/* <CardTitle></CardTitle> */}
                    {this.renderItems()}
                    <CardText />
                  </Card>
                </Col>
              </Row>
            </Modal.Body>
            </tbody>
            </table>
            <Modal.Footer>
              <Button 
              // onClick={this.props.onHide}
              onClick={() => this.setState({ modalShow: false })}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

// import React from 'react';

// const userOutput = (props) =>{
//     return (
//         <div>
//             <p>{props.name}</p>
//         </div>
//     )
// }
// export default userOutput
