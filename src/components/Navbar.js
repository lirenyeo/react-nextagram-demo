import React from 'react'
import { withRouter } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import AuthModal from './AuthModal'

class MyNavbar extends React.Component {
  state = {
    navbarExpanded: false,
    showModal: true
  }

  toggleNavExpand = () => {
    this.setState({
      navbarExpanded: !this.state.navbarExpanded
    })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  goToHome = e => {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    const { showModal } = this.state
    return (
      <div>
        {showModal && <AuthModal toggleModal={this.toggleModal} toggleModal={this.toggleModal} />}
        <Navbar color="light" light expand="xs">
          <NavbarBrand onClick={this.goToHome} href="/">
            <img
              className="mr-2"
              src="https://image.flaticon.com/icons/png/512/87/87390.png"
              alt="logo"
              height="30"
            />
            nextagram
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavExpand} />
          <Collapse isOpen={this.state.navbarExpanded} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleModal} href="#">
                  Login
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Bar
                </NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Something
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(MyNavbar)
