import React from 'react'
import styled from 'styled-components'

const FeatureItem = (props: any) => {
  return (
    <Container>
      <div>
        <img src={props.value.image} alt="" />
      </div>
      <div>
        <h3>{props.value.header}</h3>
        <span>{props.value.description}</span>
      </div>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div img{
    width: 40px;
    height: 40px;
    margin-right: 22px;
    margin-top: 2px;
  }
  div h3{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #3A3A3A;
  }
  div span{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #898989;
  }
`
export default FeatureItem
