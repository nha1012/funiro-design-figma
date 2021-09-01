import React from 'react'
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components'
import carousel2 from '../../assets/carousel2.png'
const TipAndTrick = () => {
 const settingsCarousel: Settings = {
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  swipeToSlide: true,
  variableWidth: true,
  dots: true,
  customPaging: i => (
    <div className="indicator-item">
      <div className="indicator-dots"></div>
    </div>
  )
};

  return (
    <Container>
      <h2>Tips & Tricks</h2>
      <div className="carousel-tip">
        <Slider {...settingsCarousel}>
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
          <div>
            <div className="carousel-item">
              <img src={carousel2} alt="" />
              <h5>How to create a living room to love</h5>
              <span>20 jan 2020</span>
            </div>
          </div>
          
        </Slider>
      </div>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 44px;
  h2{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3A3A3A;
    margin-bottom: 44px;

  }
  .carousel-tip{
    max-width: 1285px;
    margin: 0 auto;
    .carousel-item{
      h5{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        color: #3A3A3A;
        margin-top: 16px;
      }
      span{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #898989;
        margin-top: 8px;
      }

    }
  }

`
export default TipAndTrick
