import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'

class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users/:id" component={UserProfilePage} />
        </Switch>
      </div>
    )
  }
}

export default App
