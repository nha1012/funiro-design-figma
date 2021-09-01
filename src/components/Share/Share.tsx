import React from 'react'
import styled from 'styled-components'
import Gallery from "react-photo-gallery";
import { photos } from './Photos';

const Share = () => {
  return (
    <Container>
      <div className="title">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>
      <div className="wrapper">
        <Gallery photos={photos} direction={"row"} />
      </div>
      <div className="line__bottom"></div>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 44px;
  p{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: #616161;
  }
  h2{
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3A3A3A;
    margin-bottom: 44px;
  }
  .wrapper{
    height: 721px;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
    /* img{
      margin-right: 5px;
    } */
  }
  .line__bottom{
    max-width: 1237px;
    height: 0px;
    border: 1px solid #D8D8D8;
    margin: 0 auto;
    margin-bottom: 31px;
  }
`
export default Share
