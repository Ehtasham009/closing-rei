import React from 'react'
import { ReactSVG } from 'react-svg'

import styled from 'styled-components';



const StyledCom = styled.div`    
    display: grid; grid-template-columns: 1fr; justify-items: center; align-content: flex-start; text-align: center; grid-gap: 20px; padding: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

function BusinessOperations_card({id, image, tittle, description}) {
  return (
    <StyledCom id={id} className='panel'>
        <div className='icon-holder'>
            <ReactSVG src={image} />
        </div>
        <h4>{tittle}</h4>
        <div className='description-holder'>
            <p>{description}</p>
        </div>
    </StyledCom>
  )
}

export default BusinessOperations_card;