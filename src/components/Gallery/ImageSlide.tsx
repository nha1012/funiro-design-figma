import React from 'react'
import styled from 'styled-components'
import { slideDatas } from './SlideData'

const ImageSlide = (props: any) => {
  
  return (
    <Container>
      {
        slideDatas.map((value: any, key: number)=>{
          return( 
            <img src={value.image} alt="" width="934" height="553"/>
          )
        })
      }
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  margin-top: 46px;
  align-self: flex-end;
  flex-direction: row;
  img{
    margin-right: 20px;
  }
`
export default ImageSlide
