import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Route } from 'react-router-dom'

const Welcome = props => {
  return <h1>Nextagram welcomes you!</h1>
}

const User = props => {
  return (
    <h1 className="text-danger">
      This is User Page (User ID: {props.match.params.theIdOfUser})
    </h1>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact component={Welcome} path="/welcome" />
        <Route component={User} path="/users/:theIdOfUser" />
        <Navbar />
        <Homepage />
      </div>
    )
  }
}

export default App
