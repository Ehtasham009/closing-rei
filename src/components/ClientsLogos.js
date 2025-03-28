import React from 'react'
import { ReactSVG } from 'react-svg';

import styled from 'styled-components';



const StyledCom = styled.div`
    border-bottom: 1px solid #e5e5e5; background: rgba(255, 255, 255, 0.8);

    .p-section {padding: 10px 0}
    .items-holder{
        display: flex; grid-gap: 40px; 
	}
`;

function ClientsLogos() {
    

  return (
    <StyledCom className="p-section section-two" data-scroll-section>
        <marquee className="container ms-2">
            <div className='items-holder'>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
                <img src='/images/clients/pcidss.svg' width="150px"/>
            </div>
        </marquee>
    </StyledCom>
  )
}

export default ClientsLogos;