import React from "react";
import { Form, Dropdown, ButtonGroup, Modal, Button } from "react-bootstrap";
import {
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "../add.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Modal className="modal"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            <Nav tabs >
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  New Task
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  New Employee
                </NavLink>
              </NavItem>
            </Nav>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="6" id="employee">
                  <Card body>
                    <CardTitle>Task Assigment</CardTitle>
                    <CardText>
                      <Form className=" text-capitalize" onSubmit={this.onSubmit.bind(this)}>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Employee Name"
                            // value={this.state.value}
                            onChange={this.props.changed}
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Task"
                            ref="taskMessage"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group>
                          <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Dropdown as={ButtonGroup}>
                            <Button variant="primary" >Choose Priority</Button>
                            <Dropdown.Toggle
                              split
                              variant="primary"
                              id="dropdown-split-basic"
                            />
                            <Dropdown.Menu>
                              <Dropdown.Item className="red" href="#/action-1">
                                Red
                              </Dropdown.Item>
                              <Dropdown.Item  className="orange" href="#/action-2">
                                Orange
                              </Dropdown.Item>
                              <Dropdown.Item className="green"href="#/action-3">
                                Green
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Comments"
                          />
                        </Form.Group>

                        <Button
                          type="submit"
                          className="btn btn-block btn-primary mt-3"
                        >
                          Assign
                        </Button>
                      </Form>
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6" id="employee">
                  <Card body>
                    <CardTitle>Register New Employee</CardTitle>
                    <CardText>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="text"
                            placeholder="Name of Employee"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control
                            type="text"
                            placeholder="Enployee Title"
                          />
                        </Form.Group>
                      </Form>
                    </CardText>
                    <Button>Register</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  onSubmit (e) {
    this.props.createTask(this.refs.taskMessage.value);
    this.refs.taskMessage.value = "";
    
    e.preventDefault();
}
}
export default AddTodo;
