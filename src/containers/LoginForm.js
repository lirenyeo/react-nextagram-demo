import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import Axios from 'axios'
import { toast } from 'react-toastify'

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    const { username, password } = this.state
    e.preventDefault()
    Axios.post('https://insta.nextacademy.com/api/v1/login', {
      username,
      password
    })
      .then(result => {
        toast('Successfully Logged In!')
      })
      .catch(error => {
        toast(error.response.data.message)
      })
  }

  render() {
    const { toggleModal, toggleForm } = this.props
    return (
      <>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin} id="login-form">
            <FormGroup>
              <Label>Username</Label>
              <Input
                onChange={this.handleInput}
                value={this.state.username}
                type="text"
                name="username"
                placeholder="At least 5 characters"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                onChange={this.handleInput}
                value={this.state.password}
                type="password"
                name="password"
              />
            </FormGroup>
          </Form>
          <p onClick={toggleForm} className="text-primary">
            Not a member yet? Click here to Sign Up
          </p>
        </ModalBody>
        <ModalFooter>
          <Button form="login-form" color="info" onClick={this.toggle}>
            Log In
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </>
    )
  }
}

export default LoginForm
