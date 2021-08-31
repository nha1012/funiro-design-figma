import React from 'react'
import styled from 'styled-components'
import image from '../../assets/Images.svg'
const ProductItem = () => {
  return (
    <Container>
      <div className="product-info">
        <img src={image} alt="" />
        <h3>Name</h3>
        <span>Test</span><br />
        <i>40000</i><del>3000</del>
      </div>
      <div className="product-more">
        
      </div>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 20px;
    max-width: 285px;
    height: 446px;
    display: flex;
    background-color: #F4F5F7;
    position: relative;
    .product-info {
      img {
        width: 285px;
        height: 301px;
      }
      h3{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        color: #3A3A3A;
        margin: 8px 16px;

      }
      span{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #898989;
        margin: 8px 16px;

      }
      i{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;

        color: #3A3A3A;

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 16px;
      }
      del{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: #B0B0B0;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 8px 16px;
      }
    }

    .product-more{
      max-width: 285px;
      height: 446px;
      display: flex;
      background: #3A3A3A;
      opacity: 0.72;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
`

export default ProductItem
