import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import '../add.css'
export default class Useradd extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
      // userInput: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    const { handleSubmit } = this.props; // handle submit from personal display

    return (
      <div>
        <Button
          onClick={this.handleShow}
          className="plus-button"
          variant="outline-light"
        >
          <i className="fas fa-user-plus " />{" "}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card card-body my-3">
              <form onSubmit={handleSubmit}>
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
                    onChange={this.props.changed}
                   
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-block btn-success mt-3"
                >
                  Register
                </button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
// import { Button } from "react-bootstrap";
// export default class Useradd extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       name:"" // set up name
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     const data = this.state
//     console.log("final data is", data)

// }
// handleInputChange = (event) =>{

//   this.setState({
//    //    fullname: event.target.value
//    [event.target.name]: event.target.value
//   })

// }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     const { addboxes, handleSubmit } = this.props;

//     return (
//       <div>
//         <Button
//           onClick={this.toggle}
//           className="plus-button"
//           variant="outline-light"
//         >
//           <i class="fas fa-user-plus " />{" "}
//         </Button>
//         <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
//           <ModalBody>
//             <div className="card card-body my-3">
//               <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                   <div className="input-group-prepend">
//                     <div className="input-group-text bg-primary text-white">
//                       <i className="fas fa-user" />
//                     </div>
//                   </div>
//                   <Input
//                     type="text"
//                     className="form-control text-capitalize"
//                     placeholder="Enter Name"
//                     name="name" // me
//                     onChange={this.handleInputChange} // me
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-block btn-success mt-3"
//                   // onClick={this.addboxes}
//                   //me
//                 >
//                   Register
//                 </button>
//               </form>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="secondary" onClick={this.toggle}>
//               Close
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }
