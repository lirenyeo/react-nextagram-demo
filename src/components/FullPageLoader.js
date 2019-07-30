import React from 'react'
import styled from 'styled-components'
import BirdGif from '../images/loading.gif'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 100%;
  width: 100%;

  img {
    margin: 3em;
  }
`

function FullPageLoader(props) {
  return (
    <Container>
      <img src={BirdGif} alt="loading" />
    </Container>
  )
}

export default FullPageLoader
