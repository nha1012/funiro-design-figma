import React, { useState } from 'react'
import styled from 'styled-components'
import GalleryImage from '../../assets/Gallery.svg'
import Directional from './Directional'
import Slide from './Slide'
import { slideDatas } from './SlideData'

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Container>
      {slideDatas.map((value, key)=>{
        return (<Slide className={key === currentSlide? 'active' : ''} value={value} key={key}/>)
      })}
      <Directional></Directional>

    </Container>
  )
}
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
`
export default Gallery
