import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import LoginForm from '../containers/LoginForm'
import SignUpForm from '../containers/SignUpForm'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Container = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1em;
  width: 95%;
  max-width: 450px;
`

class AuthModal extends Component {
  state = {
    isLogin: false
  }

  toggleForm = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }


  render() {
    return (
      <Background>
        <Container>
          {this.state.isLogin ? <h4>Login</h4> : <h4>Sign Up</h4>}
          <hr />
          {this.state.isLogin ? <LoginForm toggleForm={this.toggleForm} /> : <SignUpForm toggleForm={this.toggleForm} />}
          <div className="my-5">
            <Button color="secondary" onClick={this.props.toggleModal}>
              Cancel
            </Button>
          </div>
        </Container>
      </Background>
    )
  }
}

export default AuthModal
