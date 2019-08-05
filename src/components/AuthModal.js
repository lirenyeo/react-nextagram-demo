import React, { Component } from 'react'
import { Modal } from 'reactstrap'
import LoginForm from '../containers/LoginForm'
import SignUpForm from '../containers/SignUpForm'

class AuthModal extends Component {
  state = {
    isLogin: true
  }

  toggleForm = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    const { isLogin } = this.state
    const { showModal, toggleModal } = this.props
    return (
      <Modal isOpen={showModal} toggle={toggleModal}>
        {isLogin ? (
          <LoginForm
            toggleModal={toggleModal}
            toggleForm={this.toggleForm}
          />
        ) : (
          <SignUpForm
            toggleModal={toggleModal}
            toggleForm={this.toggleForm}
          />
        )}
      </Modal>
    )
  }
}

export default AuthModal
