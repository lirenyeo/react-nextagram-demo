import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'
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

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    margin: 0;
  }
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
          <div className="header">
            {this.state.isLogin ? <h4>Login</h4> : <h4>Sign Up</h4>}
            <Button color="default" onClick={this.props.toggleModal}>
              X
            </Button>
          </div>
          <hr />
          {this.state.isLogin ? (
            <LoginForm toggleModal={this.props.toggleModal} toggleForm={this.toggleForm} />
          ) : (
            <SignUpForm toggleModal={this.props.toggleModal} toggleForm={this.toggleForm} />
          )}
        </Container>
      </Background>
    )
  }
}

export default AuthModal
