import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
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
    const { isValid, username  } = this.state
    if (username.length > 4) {
      if (isValid) {
        return {valid: true}
      } else {
        return {invalid: true}
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
          className: 'bg-danger text-white',
        })
      })
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSignUp}>
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
          <FormFeedback>Oh noes! that username is already taken</FormFeedback>
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
        <p onClick={this.props.toggleForm} className="text-info">
          Click here to Login
        </p>
        <Button color="info">Submit</Button>
      </Form>
    )
  }
}

export default SignUpForm
