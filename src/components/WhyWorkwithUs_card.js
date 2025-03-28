import React from 'react'
import { ReactSVG } from 'react-svg'

import styled from 'styled-components';



const StyledCom = styled.div`    
    display: grid; grid-template-columns: 1fr; justify-items: center; align-content: flex-start; text-align: center; grid-gap: 20px; padding: 20px; background:rgb(252, 252, 252); border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

function WhyWorkwithUs_card({id, image, tittle, description}) {
  return (
    <StyledCom id={id} className='panel'>
        <h4>{tittle}</h4>
        <div className='description-holder'>
            <p>{description}</p>
        </div>
    </StyledCom>
  )
}

export default WhyWorkwithUs_card;