import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settingsCarousel} from './SettingCarousel'
import styled from 'styled-components';
import carousel1 from '../../assets/carousel1.svg'
import right from '../../assets/Icon/Right 16px.svg'
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
            <div className="room-details">
              <div>
                <h4>
                  Bed Room
                </h4>
                <h3>
                  Inner Peace
                </h3>
              </div>
            </div>
            <div className="right-click">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
            <div className="room-details">
              <div>
                <h4>
                  Bed Room
                </h4>
                <h3>
                  Inner Peace
                </h3>
              </div>
            </div>
            <div className="right-click">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
            <div className="room-details">
              <div>
                <h4>
                  Bed Room
                </h4>
                <h3>
                  Inner Peace
                </h3>
              </div>
            </div>
            <div className="right-click">
              <img src={right} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img src={carousel1} alt="" />
            </div>
            <div className="room-details">
              <div>
                <h4>
                  Bed Room
                </h4>
                <h3>
                  Inner Peace
                </h3>
              </div>
            </div>
            <div className="right-click">
              <img src={right} alt="" />
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
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .room-details{
      width: 217px;
      height: 130px;
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(3px);
      position: absolute;
      bottom: 24px;
      left: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      h4{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #616161;
        flex: none;
        order: 2;
        flex-grow: 0;
      }
      h3{
        font-family: Gilroy;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 120%;
        color: #3A3A3A;

      }
    }
    .right-click{
      position: absolute;
      bottom: 24px;
      left: 241px;
      width: 48px;
      height: 48px;
      background-color: #E89F71;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img{
        width: 24px;
        height: 24px;
      }
    }
  }
`
export default Inspirations
