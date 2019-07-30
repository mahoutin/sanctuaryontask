import React, { Component } from "react";
import { Modal, Button, Container, Col, Row } from "react-bootstrap";
import Useradd from "./Useradd";
import TodoContain from "./TodoContain";

export default class PersonalDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      todoboxes: [], // me
      nestedModal: false,
      username: "mahoutin"
    };
    this.toggle = this.toggle.bind(this);
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <div>
          {" "}
          <Button
            onClick={() => this.setState({ modalShow: true })}
            variant="outline-light"
            size="lg"
          >
            <p>View Task </p>
          </Button>
        </div>
        <div>
          <Modal
            className="modal"
            show={this.state.modalShow}
            onHide={modalClose}
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header toggle={this.toggle}>Sanctuary on Task </Modal.Header>

            <Useradd
              handleSubmit={this.handleSubmit}
              changed={this.usernameChangedHandler}
            />

            <Modal.Body>
              <Container>
                <Row className="show-grid">
                  <Col xs={12} lg={12}>
                    {this.state.todoboxes.map((boxes, index) => {
                      return (
                        <div key={index}>
                          <TodoContain
                            onChange={e => this.boxhandleChange(e, index)}
                            value={boxes}
                            userName={this.state.username}
                          />
                        </div>
                      );
                    })}{" "}
                    {/* me */}
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button
                color="primary"
                onClick={() => this.setState({ modalShow: false })}
              >
                Close
              </Button>{" "}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
