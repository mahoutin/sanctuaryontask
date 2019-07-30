import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export default class Taskadd extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        return (
          <>
            <Button variant="primary" onClick={this.handleShow}>
              Launch demo modal
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>            <div className="card card-body my-3">
              <form >
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                      <i className="fas fa-user" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control text-capitalize"
                    placeholder="Enter Name"
                    name="name" // me
                    onChange={this.handleInputChange} // me
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-success mt-3"
                  // onClick={this.addboxes}
                  //me
                >
                  Register
                </button>
              </form>
            </div></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    }
