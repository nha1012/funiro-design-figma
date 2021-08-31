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
`
export default Products
