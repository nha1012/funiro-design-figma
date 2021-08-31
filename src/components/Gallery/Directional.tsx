import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Right from '../../assets/Icon/Right.svg'

import { decrement, increment } from '../../store/features/Gallery';
import { RootState } from '../../store/store';
const Directional = () => {
  const currentSlide = useSelector((state: RootState) => state.gallery.currentSlide);
  const dispatch = useDispatch();

  const leftCLickHandle = ()=>{
    return currentSlide > 0 ? dispatch(decrement()) : ''
  }

  const rightCLickHandle = ()=>{
    return currentSlide < 2 ? dispatch(increment()) : ''
  }
  return (
    <Container>
      <div className="left-icon" onClick={leftCLickHandle}>
        <img src={Right} alt="" />
      </div>
      <div  onClick={rightCLickHandle}>
        <img className="right-icon" src={Right} alt="" /> 
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 80px;
  top: 151px;
  div{
    display: flex;
    width: 48px;
    height: 48px;
    background: #E89F71;
    opacity: 0.3;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
    margin-left: 8px;
    cursor: pointer;
    img{
      width: 24px;
      justify-content: center;
      margin: 0 auto;
      align-items: center;

      &.right-icon{
        transform: rotate(180deg);
      }
    }

    &:hover{
      opacity: 1;
    }
  }
`
export default Directional
