import React from 'react'
import styled from 'styled-components'

const Directional = () => {
  return (
    <Container>
      <div>
        <img src="" alt="" />
        pre
      </div>

      <div>
        <img src="" alt="" />
        next
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 60px;
  top: 180px;
`
export default Directional
