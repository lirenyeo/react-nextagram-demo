import React from 'react'
import Axios from 'axios'
import FullPageLoader from '../components/FullPageLoader'
import UserImages from '../containers/UserImages'

class UserProfilePage extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    Axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`).then(
      result => {
        this.setState({
          user: result.data
        })
      }
    )
  }

  render() {
    if (!this.state.user) return <FullPageLoader />

    const { id, username, profileImage } = this.state.user

    return (
      <div>
        <h1>Username: {username}</h1>
        <img src={profileImage} height="100" width="100" alt="profile img" />
        <UserImages userId={id} />
      </div>
    )
  }
}

export default UserProfilePage
