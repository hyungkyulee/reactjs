import React, { Component } from 'react';
import { 
    Col, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Button
} from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            blur: {
                firstname: false,
                lastname: false,
                phonenumber: false,
                email: false
            }
        }
    }

    handleInputchange = (event) => {
        const target = event.target
        const value = (target.type === 'checkbox') ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        console.log('current state is: ', JSON.stringify(this.state))
        alert('current state is: ' + JSON.stringify(this.state))
        event.preventDefault();
    }

    handleBlur = (field) => (event) => {
        this.setState({
            blur: {...this.state.blur, [field]: true}
        })
    }
    validate = (firstname, lastname, phonenumber, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: ''
        }

        if (this.state.blur.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters'
        else if (this.state.blur.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters'

        if (this.state.blur.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters'
        else if (this.state.blur.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters'

        const regex = /^\d+$/
        if(this.state.blur.phonenumber && !regex.test(phonenumber))
            errors.phonenumber = 'Tel. Number should contain only numbers'

        if(this.state.blur.email && email.split('').filter(x => x ==='@').length !== 1)
            errors.email = 'Email should contain a @'

        return errors
    }

    render () {
        const errors = this.validate(this.state.firstName, 
                                    this.state.lastName, 
                                    this.state.phoneNumber,
                                    this.state.email)
      return(
          <div className="container">
              <div className="col-12">
                  <h3>Send us your feedback</h3>
              </div>
              <div className="col-12 col-md-12">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="firstName" md={2}>
                            First Name
                        </Label>
                        <Col md={10}>
                            <Input type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleInputchange}
                                onBlur={this.handleBlur('firstname')}
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastName" md={2}>
                            Last Name
                        </Label>
                        <Col md={10}>
                            <Input type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleInputchange} 
                                onBlur={this.handleBlur('lastname')}
                                valid={errors.lastname === ''}
                                invalid={errors.lastname !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="phoneNumber" md={2}>
                            Phone Number
                        </Label>
                        <Col md={10}>
                            <Input type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={this.state.phoneNumber}
                                onChange={this.handleInputchange} 
                                onBlur={this.handleBlur('phonenumber')}
                                valid={errors.phonenumber === ''}
                                invalid={errors.phonenumber !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>
                            Email
                        </Label>
                        <Col md={10}>
                            <Input type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputchange}
                                onBlur={this.handleBlur('email')} 
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        value={this.state.agree}
                                        onChange={this.handleInputchange} 
                                    />
                                    {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select"
                                name="contactType"
                                value={this.state.contactType}
                                onChange={this.handleInputchange} 
                            >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>
                            Message
                        </Label>
                        <Col md={10}>
                            <Input type="text"
                                id="message"
                                name="message"
                                placeholder="Message"
                                value={this.state.message}
                                onChange={this.handleInputchange} 
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size:10, offset:2}}>
                            <Button
                                type="submit"
                                color="primary"
                                >
                                Send feedback
                            </Button>
                        </Col>
                    </FormGroup>
                  </Form>
              </div>
              
              <div className="row row-content">
                  <div className="col-12">
                  <h3>Location Information</h3>
                  </div>
                  <div className="col-12 col-sm-4 offset-sm-1">
                          <h5>Our Address</h5>
                          <address>
                          121, Clear Water Bay Road<br />
                          Clear Water Bay, Kowloon<br />
                          HONG KONG<br />
                          <i className="fa fa-phone"></i>: +852 1234 5678<br />
                          <i className="fa fa-fax"></i>: +852 8765 4321<br />
                          <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                          </address>
                  </div>
                  <div className="col-12 col-sm-6 offset-sm-1">
                      <h5>Map of our Location</h5>
                  </div>
                  <div className="col-12 col-sm-11 offset-sm-1">
                      <div className="btn-group" role="group">
                          <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                          <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                          <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default Contact