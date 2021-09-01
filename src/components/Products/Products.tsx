import React from 'react'
import styled from 'styled-components'
import { ProductDatas } from './ProductDatas'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <Container>
      <h1>Our Products</h1>
      <div className="wrapper">
        {
          ProductDatas.map((value, key)=>{
            return (
              <ProductItem />
            )
          })
        }
      </div>
      <button className="btn-show-more">Show more</button>
    </Container>
  )
}
const Container  = styled.div`
  max-width: 1240px;
  margin-top: 88px;
  margin: 0 auto;
  margin-top: 20px;
  .wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3A3A3A;
  }
  .btn-show-more{
    width: 245px;
    height: 48px;
    border-radius: 0;
    border:1px solid #E89F71;
    color: #E89F71;
    margin: 0 auto;
    display: block;
    background-color: #ffff;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    margin-top: 44px;
    margin-bottom: 44px;

    &:hover{
      background-color: #E89F71;
      border:1px solid #E89F71;
      color: #fff;
    }
  }
`
export default Products
