import React from 'react'
// import { useMyContext } from './context';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledCom = styled.div`
       background: #fff;  min-height: 70px; border-radius: 15px; display: flex; justify-content: space-between ; align-items: center; padding: 10px 40px; box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); margin: 20px 20px 0; position: absolute; z-index: 9; width: calc(100% - 40px);

        .header-nav .nav-item{
            color: var(--primary-color); position: relative; font-weight: 500;
            
            &::before{content: ""; height: 0px; position: absolute; bottom: -7px; width: 100%; background: var(--secondary-color); left: 0; border-radius: 5px; transition: 0.2s all;}
            &:hover::before, &.active::before{height: 3px}
        }

    
`;

function Header() {
  return (
    <StyledCom className='main-header'>
        <a className="logo-holder" href="">
                <img src="images/rei-logo.png" alt="REI logo" />
            </a>
            <nav className="h-list header-nav" data-gap="40">
                <a href="#home" className="nav-item active">Home</a>
                <a href="" className="nav-item">Operations</a>
                <a href="#services" className="nav-item">Services</a>
                <a href="#" className="nav-item">Reviews</a>
                <a href="#contact-us" className="nav-item">Contact Us</a>
            </nav>
    </StyledCom>
  )
}

export default Header;