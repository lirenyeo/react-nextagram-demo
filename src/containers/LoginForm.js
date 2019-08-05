import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="At least 5 characters"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </FormGroup>
        <p onClick={this.props.toggleForm} className="text-info">Click here to sign up</p>
        <Button color="info">Submit</Button>
      </Form>
    )
  }
}

export default LoginForm
