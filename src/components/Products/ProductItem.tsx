import React from 'react'
import styled from 'styled-components'
import image from '../../assets/Images.svg'
import heart from '../../assets/Icon/Heart-white.svg'
import share from '../../assets/Icon/gridicons_share.svg'
const ProductItem = () => {
  return (
    <Container>
      <div className="product-info">
        <img src={image} alt="" />
        <h3>Name</h3>
        <span>Test</span><br />
        <i>40000</i><del>3000</del>
      </div>
      <div className="product-more blur"></div>
      <div className="product-more">
        <div className="wrapper">
          <div>
            <button>Add to cart</button>
          </div>
          <div className="action">
            <div>
              <img src={share} alt="" />
              <span>Share</span>
            </div>
            <div>
              <img src={heart} alt="" />
              <span>Like</span>
            </div>
          </div>
        </div>
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
    .product-more.blur{
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
      opacity: 0;
    }
    .product-more{
      display: flex;
      opacity: 0;
      max-width: 285px;
      height: 446px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      animation-name: show-more-action;
      transition-duration: 1s;
      animation-timing-function: ease-ease-in-out;
      div button{
        width: 202px;
        height: 48px;
        border-radius: 0;
        border: none;
        color: #E89F71;
        cursor: pointer;
        &:hover{
        color: #fff;
        background-color: #E89F71;

        }
      }

      .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        .action{
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          margin-left: 20px;
          img{
            width: 24px;
            height: 24px;
            fill: red;
          }
          div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 30px;
            cursor: pointer;
            span{
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 150%;
              color: #FFFFFF;
              margin-left: 8px;
            }
          }
        }
      }
    }
    /* hover product */
    &:hover{
        .product-more{
          opacity: 1;
        }
        .product-more.blur{
          opacity: 0.72;
        }
      }

    @keyframes show-more-action {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0%);
        opacity: 1;
      }
    }
`

export default ProductItem
