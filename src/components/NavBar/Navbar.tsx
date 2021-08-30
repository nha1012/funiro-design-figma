import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import search from '../../assets/Icon/Search.svg'
import ArrowDown from '../../assets/Icon/Arrow-down.svg'
import Cart from '../../assets/Icon/Cart.svg'
import Heart from '../../assets/Icon/Heart.svg'
import Avatar from '../../assets/Icon/Avatar.svg'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <Nav className={clicked ? 'active': ''}>
        <LogoContainer>
          <a href="#">
            Funio.
          </a>
        </LogoContainer>
        <Menucontainer className={clicked ? 'active': ''}>
          <ul>
            <li>
              <a href="#">
                <span>Products</span>
                <img src={ArrowDown} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>Rooms</span>
                <img src={ArrowDown} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <span>Inspirations</span>
              </a>
            </li>
          </ul>
        </Menucontainer>
        <SearchContainer className={clicked ? 'active': ''}>
          <img src={search} alt="" />
          <input type="text" placeholder="Search for minimalist chair"/>
        </SearchContainer>
        <MenuIconContainer className={clicked ? 'active': ''}>
          <a href=""><img src={Heart} alt="" width="24"/></a>
          <a href=""><img src={Cart} alt="" width="24"/></a>
          <a href=""><img src={Avatar} alt="" width="24"/></a>
        </MenuIconContainer>
        <MenuBar onClick={()=> setClicked(!clicked)}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </MenuBar>
      </Nav>
    </Container>
  )
}


const Container = styled.div`
  max-width: 1240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  /* position: absolute; */
`
const Nav = styled.div`
  display: flex; 
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-width: 100%;
  height: 45px;
  padding-top: 40px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    &.active{
        display: flex;
        height: 300px;
      }
  }
`
const Menucontainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li a{
      margin-right: 40px;
      color: #3A3A3A;
    }
    li a img{
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: -5px 8px;
    }
    li a span{
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
    }
  }
  @media screen and (max-width: 960px) {
      display: none; 
      flex-direction: column;
      padding-left: 20px;
      a{
        font-size: 30px;
      }
      &.active{
        display: flex;
      }
    }
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  a{
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
  @media screen and (max-width: 960px) {
    display: flex; 
    justify-content: start;
    padding-left: 20px;
    a{
      font-size: 30px;
    }
  }
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  img{
    position: absolute;
    left: 15px;
    top: 12px;
  }
  input{
    width: 473px;
    height: 46px;
    background-color: #ffff;
    border-radius: 0;
    border: none;
    &::placeholder{
      position: absolute;
      font-family: 'Nunito', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      left: 44px;
      top: 12px;
    }
  }
  @media screen and (max-width: 960px) {
      display: none;
      &.active{
        display: flex;
      }
    }
`
const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 152px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
      justify-content: space-between;
      margin:0 auto ;
      width: 150px;
      display: none;
      &.active{
        display: flex;
      }
    }
`
const MenuBar = styled.div`
  display: flex;
  align-items: center;
  display: none;
  i{
    cursor: pointer;
    font-size: 30px;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export default Navbar
