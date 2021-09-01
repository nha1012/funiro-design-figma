import React from 'react'
import styled from 'styled-components'
import plane from '../../assets/Icon/carbon_send-alt-filled.svg'
const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <ul>
          <h2>Funiro.</h2>
          <li>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</li>
          <li>Sawojajar Malang, Indonesia</li>
          <li>+6289 456 3455</li>
          <li>www.funiro.com</li>
        </ul>

        <ul>
          <h2>Menu</h2>
          <li>Products</li>
          <li>Rooms</li>
          <li>Inspirations</li>
          <li>About Us</li>
          <li>Terms & Policy</li>
        </ul>

        <ul>
          <h2>Account</h2>
          <li>My Account</li>
          <li>Checkout</li>
          <li>My cart</li>
          <li>My catalog</li>
        </ul>

        <ul>
          <h2>Stay Connected</h2>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>

        <ul>
          <h2>Stay Updated</h2>
          <li className="contact">
            <input type="text" placeholder="Enter your email"/>
            <div className="btn-send">
              <img src={plane} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}
const Container = styled.div`
  .wrapper{
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    h2{
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
      margin-bottom: 20px;
    }
    ul{
      list-style: none;
      .contact{
        display: flex;
        flex-direction: row;
      }
      li{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #616161;
        max-width: 249px;
        input{
          width: 242px;
          height: 45px;
          background: #F4F5F7;
          border: none;
          border-radius: 0;
        }
        .btn-send{
          width: 45px;
          height: 45px;
          background-color: #E89F71;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 2px;
          cursor: pointer;
          img{
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }

`
export default Footer
