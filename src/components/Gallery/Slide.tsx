import React from 'react'
import styled from 'styled-components'
import arrowRright from '../../assets/Icon/arrow-right.svg'
import ImageSlide from './ImageSlide'

const Slide = (props: any) => {
  return (
    <Container className={props.className}>
      <PreviewContainer>
        <Preview>
          <h1>High-Quality<br />Furniture<br />Just For You</h1>
          <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <button>Shop Now</button>
        </Preview>
      </PreviewContainer>
      <ImageSlide></ImageSlide>
      <PriceContainer>
        <h3>{props.value.name}</h3>
        <p>{props.value.description}</p>
        <div className="price">
          <span>{props.value.price}</span>
          <img src={arrowRright} alt="" />
        </div>
      </PriceContainer>
    </Container>
  )
}


const Container = styled.div`
  position: relative  ;
  max-width: 1240px;
  height: 623px;
  margin: 0 auto;
  margin-top: 57px;
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  .slide-image{
    margin-top: 60px;
  }
  &.active{
    display: flex;
  }
`
const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 494px;
  height: 553px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(31px);
  position: absolute;
  left: 0;
  z-index: 4;
`

const Preview = styled.div`
  position: relative;
  width: 374px;
  height: 433px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 120%;
    color: #3A3A3A;
  }
  p{
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #898989;
  }
  button{
    width: 374px;
    height: 78px;
    background-color: #E89F71;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }
`

const PriceContainer = styled.div`
  width: 294px;
  height: 148px;
  display: flex;
  padding-left: 24px;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(31px);
  position: absolute;
  right: 30px;
  bottom: 70px;
  justify-content: center;
  h3{
    color: #3A3A3A;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 120%;
  }
  p{
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #616161;
    margin:  10px 0 10px 0;
  }
  span{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #3A3A3A;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  img{
    cursor: pointer;
    padding-right: 10px;
  }
  .price{
    display: flex;
    justify-content: space-between;
  }
`
export default Slide
