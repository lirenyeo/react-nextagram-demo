import React from 'react'
import Axios from 'axios'
import Image from 'react-graceful-image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
  }
`
class UserImages extends React.Component {
  state = {
    images: [],
    loading: true,
  }
  componentDidMount() {
    const { userId } = this.props
    Axios.get(
      `https://insta.nextacademy.com/api/v1/images?userId=${userId}`
    ).then(({ data }) => {
      this.setState({
        images: data,
        loading: false
      })
    })
  }

  render() {
    const { images, loading } = this.state
    if (loading) return 'Loading...'

    if (images.length) {
      return (
        <ImageContainer>
          {images.map((url, idx) => (
            <Image key={idx} className="m-1" src={url} width="100" height="100" alt="User Images" />
          ))}
        </ImageContainer>
      )
    }

    if (!loading && !images.length) {
      return (
        <ImageContainer>
          <p className="text-muted">Nothing to see here!</p>
        </ImageContainer>
      )
    }

  }
}

export default UserImages
