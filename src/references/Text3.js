import React from "react";
import Useradd from "../Components/Useradd";
// import { Modal, Button } from "react-bootstrap";
import TodoContain from "../Components/TodoContain";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Text3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      todoboxes: [] // me
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }


  addboxes() {
    this.setState({ todoboxes: [...this.state.todoboxes, ""] });
  } // me

  boxhandleChange(e, index) {
    this.setState.todoboxes[index] = e.target.value;
    this.setState({ todoboxes: this.state.todoboxes });
  } //me

  handleSubmit = e => {
    e.preventDefault();

    const newboxes = {
      index: this.state.index,
      title: this.state.todoboxes
    };
    const updatedboxes = [...this.state.todoboxes, newboxes];
    this.setState({
      todoboxes: updatedboxes,

      index: this.state.index
    });
  };

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={this.toggle}
          variant="outline-light"
          size="lg"
        >
          <p>View Task </p>
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <ModalHeader toggle={this.toggle}>Sanctuary on Task </ModalHeader>
          <Useradd handleSubmit={this.handleSubmit} />
          <ModalBody>
            {this.state.todoboxes.map((boxes, index) => {
              return (
                <div key={index}>
                  <TodoContain
                    onChange={e => this.boxhandleChange(e, index)}
                    value={boxes}
                  />
                </div>
              );
            })}
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>{" "}
           
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Text3;
