import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback
} from 'reactstrap'
import Axios from 'axios'
import { toast } from 'react-toastify'

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      isValid: false
    }
    this.timer = null
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  checkUsername = username => {
    Axios.get(
      `https://insta.nextacademy.com/api/v1/users/check_name?username=${username}`
    ).then(result => {
      this.setState({
        isValid: result.data.valid
      })
    })
  }

  handleUsernameInput = e => {
    clearTimeout(this.timer)

    const { value } = e.target

    this.setState({
      username: value
    })

    this.timer = setTimeout(() => {
      this.checkUsername(value)
    }, 300)
  }

  getInputProp = () => {
    const { isValid, username } = this.state
    if (username.length > 4) {
      if (isValid) {
        return { valid: true }
      } else {
        return { invalid: true }
      }
    } else {
      return {}
    }
  }

  handleSignUp = e => {
    e.preventDefault()
    const { username, email, password } = this.state

    Axios.post('https://insta.nextacademy.com/api/v1/users/', {
      username,
      email,
      password
    })
      .then(response => {
        toast(`${username} is successfully created!`)
        this.props.toggleModal()
      })
      .catch(error => {
        error.response.data.message.forEach(msg => {
          toast(msg, {
            className: 'bg-danger text-white'
          })
        })
      })
  }

  render() {
    const { toggleModal, toggleForm } = this.props
    return (
      <>
        <ModalHeader toggle={toggleModal}>Sign Up</ModalHeader>
        <ModalBody>
          <Form id="signup-form" onSubmit={this.handleSignUp}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChange={this.handleInput}
                type="email"
                name="email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input
                {...this.getInputProp()}
                value={this.state.text}
                onChange={this.handleUsernameInput}
                type="text"
                name="username"
                placeholder="At least 5 characters"
              />
              <FormFeedback>
                Oh noes! that username is already taken
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                onChange={this.handleInput}
                type="password"
                name="password"
              />
            </FormGroup>
          </Form>
          <p onClick={toggleForm} className="text-primary">
            Already a member? Click here to Log In
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="info" form="signup-form">
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

export default SignUpForm
