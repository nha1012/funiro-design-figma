import React from 'react'
import styled from 'styled-components'

const Indicator = () => {
  return (
    <Container>
      <div className="indicator active">
        <div className="indicator-item"></div>
      </div>

      <div className="indicator">
        <div className="indicator-item"></div>
      </div>

      <div className="indicator">
        <div className="indicator-item"></div>
      </div>

      
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  position: absolute;
  left: 45%;
  top: 163px;
  flex-direction: row;
  .indicator{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 27px;
    border-radius: 100%;
    .indicator-item{
      width: 11px;
      height: 11px;
      border-radius: 100%;
      background: #D8D8D8;
    }

    &.active{
      border: 1px solid #E89F71;
      .indicator-item{
        background: #E89F71;
      }
    }
  }
`
export default Indicator
