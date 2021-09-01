import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settingsCarousel} from './SettingCarousel'
import styled from 'styled-components';
import carousel1 from '../../assets/carousel1.svg'
const Inspirations = () => {

  return (
    <Container>
      <div className="ins-title">
        <div className="wrapper">
          <h1>50+ Beautiful rooms <br />inspiration</h1>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button>Explore More</button>
        </div>
      </div>
     <div className="carousel">
        <Slider {...settingsCarousel}>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
          <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  )
}
const Container = styled.div`
  max-width: 1440px;
  height: 670px;
  left: 0px;
  top: 2163px;
  background: #FCF8F3;
  overflow-x: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .ins-title{
    width: 578px;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel{
    max-width: 800px;
    margin-top: 45px;
  }
  .wrapper{
    width: 378px;
    height: 224px;
    h3{
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: #3A3A3A;
    }
    p{
      margin-top: 8px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #616161;
    }
    button{
      width: 176px;
      height: 48px;
      border-radius: 0;
      border: none;
      background-color: #E89F71;
      color: #fff;
      margin-top: 24px;
    }
  }
  .carousel-item{
    img{
      width: 100%;
      height: 100%;
    }
  }
`
export default Inspirations
