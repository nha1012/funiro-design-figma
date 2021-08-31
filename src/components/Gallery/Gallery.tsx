import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GalleryImage from '../../assets/Gallery.svg'
import { RootState } from '../../store/store'
import Directional from './Directional'
import Indicator from './Indicator'
import Slide from './Slide'
import { slideDatas } from './SlideData'

const Gallery = () => {
  const currentSlide = useSelector((state: RootState) => state.gallery.currentSlide);

  return (
    <Container>
      {slideDatas.map((value, key)=>{
        return (<Slide className={key === currentSlide ? 'active' : ''} value={value} key={key}/>)
      })}
      <Indicator></Indicator>
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
