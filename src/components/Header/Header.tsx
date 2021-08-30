import React from 'react'
import styled from 'styled-components'
import Gallery from '../Gallery/Gallery'
import Navbar from '../NavBar/Navbar'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar></Navbar>
        <Gallery/>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;

  background-image: url('bg.png');
  height: 774px;
  background-size: cover;
  background-repeat: no-repeat;
`

export default Header
