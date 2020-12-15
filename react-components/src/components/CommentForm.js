import React, { Component } from 'react'
import { 
  Row,
  Col,
  Label,
  Button,
  Modal,
  ModalHeader, 
  ModalBody,
} from 'reactstrap'
import {Control, LocalForm, Errors} from 'react-redux-form'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  required = (val) => val && val.length;
  maxLength = (len) => (val) => !(val) || (val.length <= len);
  minLength = (len) => (val) => val && (val.length >= len);

  toggleModal = async () => {
    await this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    console.log('isModalOpen: ', this.state.isModalOpen)
  }

  handleSubmit = (values) => {
    this.toggleModal();

    console.log('Added comments : ', JSON.stringify(values))
    alert('Added comments : ' + JSON.stringify(values))

    this.props.addComment(this.props.dishId, values.rating, values.authr, values.comment)
  }

  renderComments = () => {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={{ size: 12 }}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    validators={{
                      required: this.required,
                      minLength: this.minLength(3),
                      maxLength: this.maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 3 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={6}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    )
  }

  render() {
    return (
      <>
        {this.renderComments()}
        <Button onClick={this.toggleModal} color="primary">
          Write Comment
        </Button>
      </>
    )
  }

}

export default CommentForm